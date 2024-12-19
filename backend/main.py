from typing import Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from tf_generator import run_terraform
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Можно ограничить конкретными доменами, например, ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель данных с необязательным параметром
class VMConfig(BaseModel):
    name: str
    cpu_cores: int
    memory_gb: int
    os_type: Optional[str] = None
    disk_size_gb: Optional[int] = None  # Необязательный параметр
    template_id: str

@app.post("/create_vm/")
async def create_vm(config: VMConfig):
    try:
        print("Полученные данные для Terraform:", config.dict())

        # Запуск Terraform с переданными переменными
        result = run_terraform(config.dict())
        return {"message": "VM created successfully", "terraform_output": result}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
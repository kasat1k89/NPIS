import subprocess
from python_terraform import Terraform
import os

TERRAFORM_DIR = "terraform"

def run_terraform(config: dict):
    """Запуск Terraform с передачей переменных через команду."""
    try:
        # Инициализация Terraform
        print("Инициализация Terraform...")
        tf = Terraform(working_dir=TERRAFORM_DIR)
        tf.init()

        # Подготовка переменных для передачи через -var
        tf_vars = [f"-var '{key}={value}'" for key, value in config.items()]

        # Запуск terraform apply с переменными
        print("Запуск Terraform Apply...")
        return_code, stdout, stderr = tf.apply(skip_plan=True, var=config, auto_approve=True)

        if return_code == 0:
            print("Terraform Apply успешно завершён.")
            print(stdout)
            return stdout
        else:
            print("Ошибка при запуске Terraform Apply:")
            print(stderr)
            raise RuntimeError(stderr)

    except Exception as e:
        print(f"Ошибка Terraform: {e}")
        raise e
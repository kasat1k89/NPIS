import time
from python_terraform import Terraform

TERRAFORM_DIR = "./terraform"

def run_terraform(config: dict):
    """Запуск Terraform с передачей переменных через команду."""
    try:
        print("Инициализация Terraform...")
        tf = Terraform(working_dir=TERRAFORM_DIR)
        tf.init()

        # Генерация уникального имени
        timestamp = int(time.time())
        vm_name = f"{config['name']}-{timestamp}"
        config["name"] = vm_name

        print(f"Запуск Terraform Apply для ВМ {vm_name}...")
        return_code, stdout, stderr = tf.apply(
            skip_plan=True, var=config, auto_approve=True
        )

        if return_code == 0:
            print("Terraform Apply успешно завершён.")
            print(stdout)

            # Автоматическое удаление ресурса из состояния
            remove_state("ovirt_vm.vm")
            return stdout
        else:
            print("Ошибка при запуске Terraform Apply:")
            print(stderr)
            raise RuntimeError(stderr)

    except Exception as e:
        print(f"Ошибка Terraform: {e}")
        raise e

def remove_state(resource_name: str):
    """Удаление ресурса из состояния Terraform."""
    try:
        tf = Terraform(working_dir=TERRAFORM_DIR)

        print(f"Удаление ресурса {resource_name} из состояния Terraform...")
        return_code, stdout, stderr = tf.cmd("state", "rm", resource_name)

        if return_code == 0:
            print(f"Ресурс {resource_name} успешно удалён из состояния.")
            print(stdout)
            return stdout
        else:
            print(f"Ошибка при удалении ресурса {resource_name} из состояния:")
            print(stderr)
            raise RuntimeError(stderr)

    except Exception as e:
        print(f"Ошибка при выполнении команды state rm: {e}")
        raise e

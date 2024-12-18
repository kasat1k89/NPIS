variable "name" {
  description = "Название виртуальной машины"
  type        = string
}

variable "cpu_cores" {
  description = "Количество ядер процессора"
  type        = number
}

variable "memory_gb" {
  description = "Оперативная память (в ГБ)"
  type        = number
}

variable "disk_size_gb" {
  description = "Размер диска (в ГБ)"
  type        = number
  default = 0
}

variable "os_type" {
  description = "Операционная система"
  type        = string
  default = "None"
}

variable "url" {
  description = "Ссылка на сервер"
  type = string
  default = "https://zvirt-cluster.acid-tech.ru/ovirt-engine/api"
}

variable "cert_tls" {
  description = "Путь к сертификату"
  type = string
  default = "D:\\VKR\\cert\\pki-resource.cer"
}
variable "password" {
  description = "Пароль"
  type = string
  default = "P@ssw0rd"
}

variable "username" {
  description = "Имя пользователя"
  type = string
  default = "admin@zvirt@internal"
}
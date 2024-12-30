# README - Task Manager API

## Enlace a la Aplicación Desplegada

[Enlace a la aplicación desplegada](https://api-coally.onrender.com)

---

## Pasos para Instalar y Ejecutar el Proyecto Localmente

### 1. Clonar el Repositorio

```bash
$ git clone https://github.com/Yohaan2/api-coally.git
$ cd api-coally
```

### 2. Instalar Dependencias

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta:

```bash
$ yarn
```

### 3. Configurar las Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3001
MONGO_URL=mongodb://localhost:27017/api-coally
MONGO_DB_NAME=api-coally
```

### 4. Iniciar el Servidor

Ejecuta el siguiente comando:

```bash
$ yarn run start
```

El servidor estará disponible en `http://localhost:3001`.

---

## Detalles de Configuración

### Variables de Entorno

- `PORT`: Puerto en el que se ejecutará el servidor.
- `MONGO_URL`: Url de la base de datos.
- `DB_NAME`: Nombre de la base de datos.

### Endpoints

#### Crear Tarea

**POST /tasks**

```json
{
	"title": "Nueva tarea",
	"description": "Descripción de la tarea",
	"status": false
}
```

#### Obtener Todas las Tareas

**GET /tasks**

#### Obtener Detalles de una Tarea

**GET /tasks/:id**

#### Editar Tarea

**PUT /tasks/:id**

```json
{
	"title": "Tarea actualizada",
	"description": "Descripción actualizada",
	"status": true
}
```

#### Eliminar Tarea

**DELETE /tasks/:id**

#### Filtrar Tareas

**POST /tasks/filter**

```json
{
	"title": "Tarea actualizada",
	"description": "Descripción actualizada",
	"status": true
}
```

Valores permitidos para `filter`: `"completed"`, `"pending"`, `"all"`.

---

# README - Task Manager API

## Enlace a la Aplicación Desplegada

[Enlace a la aplicación desplegada](https://example.com)

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
MONGO_URL=mongodb://user:password@localhost:27017/
MONGO_DB_NAME=api-coally
```

### 4. Levantar la Base de Datos Localmente con Docker

Levanta la base de datos localmente con Docker:
Asegúrate de tener Docker y Docker Compose instalados. Luego, ejecuta:

```bash
docker-compose up -d
```

### 5. Iniciar el Servidor

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

# Task Manager - Backend

Este repositorio contiene el backend de un gestor de tareas. Proporciona una API para crear, obtener, editar, eliminar y filtrar tareas.

## Enlace a la aplicación desplegada

- [Enlace a la aplicación](https://example-deployment.com)

## Pasos para instalar y ejecutar el proyecto localmente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/task-manager-backend.git
   cd task-manager-backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_DATABASE=tasks_db
   PORT=4000
   ```

4. Levanta la base de datos localmente con Docker:
   Asegúrate de tener Docker y Docker Compose instalados. Luego, ejecuta:

   ```bash
   docker-compose up -d
   ```

5. Inicia el servidor:

   ```bash
   npm run start
   ```

6. Accede a la API en `http://localhost:4000`.

## Detalles de configuración

### Variables de entorno

- `DB_HOST`: Host de la base de datos.
- `DB_PORT`: Puerto de la base de datos.
- `DB_USERNAME`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña de la base de datos.
- `DB_DATABASE`: Nombre de la base de datos.
- `PORT`: Puerto en el que se ejecuta el servidor.

---

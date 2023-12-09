CREATE DATABASE IF NOT EXISTS nutrivida;
USE nutrivida;


-- Tabla para almacenar información de los pacientes
CREATE TABLE IF NOT EXISTS Pacientes (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(10),
    telefono VARCHAR(15),
    correo_electronico VARCHAR(50),
    direccion VARCHAR(100)
);

-- Tabla para almacenar información sobre las consultas
CREATE TABLE IF NOT EXISTS Consultas (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT,
    fecha_consulta DATE NOT NULL,
    observaciones TEXT,
    FOREIGN KEY (id_paciente) REFERENCES Pacientes(id_paciente)
);

-- Tabla para el historial médico
CREATE TABLE IF NOT EXISTS HistorialMedico (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT,
    fecha_registro DATE NOT NULL,
    peso FLOAT,
    altura FLOAT,
    imc FLOAT,
    nivel_grasa_corporal FLOAT,
    notas TEXT,
    FOREIGN KEY (id_paciente) REFERENCES Pacientes(id_paciente)
);

-- Tabla para registrar la información de la dieta
CREATE TABLE IF NOT EXISTS Dieta (
    id_dieta INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    descripcion TEXT,
    FOREIGN KEY (id_paciente) REFERENCES Pacientes(id_paciente)
);


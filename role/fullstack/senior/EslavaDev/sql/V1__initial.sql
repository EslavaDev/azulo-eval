-- Table Definition ----------------------------------------------

CREATE TABLE location (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country varchar(255),
    latitude varchar(255),
    longitude varchar(255),
    province_or_state varchar(255)
);

CREATE TABLE airport_operator (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255)
);

CREATE TABLE airport(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    airport_operator_id int NOT NULL,
    location_id int NOT NULL,
    airport_code varchar(255),
    priority_order int NOT NULL,
    CONSTRAINT FK_airport_airport_operator FOREIGN KEY (airport_operator_id)
    REFERENCES airport_operator(id),
    CONSTRAINT FK_airport_location FOREIGN KEY (location_id)
    REFERENCES location(id)
);

-- Indices -------------------------------------------------------

-- CREATE UNIQUE INDEX "PK_airport_operator" ON airport_operator(id i);
-- CREATE UNIQUE INDEX "PK_airport" ON airport(id uuid_ops);
-- CREATE UNIQUE INDEX "PK_location" ON location(id uuid_ops);
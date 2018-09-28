CREATE TABLE IF NOT EXISTS business (
    id serial PRIMARY KEY,
    contact_name varchar(255) NOT NULL,
    contact_email varchar(255) NOT NULL,
    contact_telephone varchar(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);CREATE TABLE IF NOT EXISTS location (
    id serial PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    business_id INT REFERENCES business(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);CREATE TABLE IF NOT EXISTS block(
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    location_id INT REFERENCES location(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);CREATE TABLE IF NOT EXISTS unit_type (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    length varchar(255) NOT NULL,
    width varchar(255) NOT NULL,
    height varchar(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);CREATE TABLE IF NOT EXISTS unit(
    id serial PRIMARY KEY,
    name varchar(225) NOT NULL,
    block_id INT REFERENCES block(id) NOT NULL,
    unit_type_id INT REFERENCES unit_type(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
 
);
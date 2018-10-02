CREATE TABLE IF NOT EXISTS business (
    id serial PRIMARY KEY,
    business_name varchar(255) NOT NULL,
    contact_name varchar(255) NOT NULL,
    contact_email varchar(255) NOT NULL,
    contact_telephone varchar(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS location (
    id serial PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    business_id INT REFERENCES business(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS block(
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    location_id INT REFERENCES location(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS unit_type (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    length varchar(255) NOT NULL,
    width varchar(255) NOT NULL,
    height varchar(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS unit(
    id serial PRIMARY KEY,
    name varchar(225) NOT NULL,
    block_id INT REFERENCES block(id) NOT NULL,
    unit_type_id INT REFERENCES unit_type(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
INSERT INTO business(business_name,contact_name,contact_email,contact_telephone) VALUES('store-everything','Mercy','mercymncube3@gmail.com',0611255163);
INSERT INTO location(address,business_id) VALUES(' 497 Jacob Mare Street Pretoria 0001 South Africa',1);
INSERT INTO block(name,location_id) VALUES('pretoria blockA',1);
INSERT INTO unit_type(name,length,width,height) VALUES('warehouse','1200m','1800m','7000m');
INSERT INTO unit( name,block_id,unit_type_id) VALUES('Room1',1,1);
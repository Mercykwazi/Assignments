CREATE TABLE IF NOT EXISTS business (
    id serial PRIMARY KEY,
    business_name varchar(50) NOT NULL,
    contact_name varchar(25) NOT NULL,
    contact_email varchar(25) NOT NULL,
    contact_telephone varchar(25) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS location (
    id serial PRIMARY KEY,
    address1 VARCHAR(50) NOT NULL,
    address2 VARCHAR(50),
    business_id INT REFERENCES business(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS block(
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    location_id INT REFERENCES location(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS unit_type (
    id serial PRIMARY KEY,
    name varchar(25) NOT NULL,
    length NUMERIC(7,2) NOT NULL,
    width NUMERIC(7,2) NOT NULL,
    height NUMERIC(7,2) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS unit(
    id serial PRIMARY KEY,
    name varchar(25) NOT NULL,
    block_id INT REFERENCES block(id) NOT NULL,
    unit_type_id INT REFERENCES unit_type(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
INSERT INTO business(business_name,contact_name,contact_email,contact_telephone) VALUES('store-everything','Mercy','mercymncube3@gmail.com',0611255163);
INSERT INTO business(business_name,contact_name,contact_email,contact_telephone) VALUES('storage','Thandi','thandi@gmail.com',0741563980);
INSERT INTO business(business_name,contact_name,contact_email,contact_telephone) VALUES('store-and-safe','Nigel','nigel@nigel.com',0791563980);
INSERT INTO business(business_name,contact_name,contact_email,contact_telephone) VALUES('trust-storage','Trust','trust@yahoo.com',0741563980);

INSERT INTO location(address1,address2,business_id) VALUES(' 3516 lioria street','johannesburg South Africa',1);
INSERT INTO location(address1,address2,business_id) VALUES(' 497 Jacob Mare Street',' Pretoria 0001 South Africa',2);
INSERT INTO location(address1,address2,business_id) VALUES(' 20 Cuba  Street', 'Mindrand South Africa',3);
INSERT INTO location(address1,address2,business_id) VALUES(' 319 ext 4  laan Street', 'Rosebank 0001 South Africa',4);

INSERT INTO block(name,location_id) VALUES('pretoria blockA1',1);
INSERT INTO block(name,location_id) VALUES('blockB1',2);
INSERT INTO block(name,location_id) VALUES('blockB2',3);
INSERT INTO block(name,location_id) VALUES('blockB3',4);

INSERT INTO unit_type(name,length,width,height) VALUES('garage',1800,1600,4000);
INSERT INTO unit_type(name,length,width,height) VALUES('warehouse',1200,1800,7000);
INSERT INTO unit_type(name,length,width,height) VALUES('garage',3,70,200);
INSERT INTO unit_type(name,length,width,height) VALUES('warehouse',126.503,1700,3000);

INSERT INTO unit( name,block_id,unit_type_id) VALUES('Room1',1,1);
INSERT INTO unit( name,block_id,unit_type_id) VALUES('Room18',2,2);
INSERT INTO unit( name,block_id,unit_type_id) VALUES('Room36',3,3);
INSERT INTO unit( name,block_id,unit_type_id) VALUES('Room9',4,4);

SELECT * FROM block;
SELECT unit FROM business INNER JOIN location ON business.id=location.business_id INNER JOIN block ON location.id=location_id INNER JOIN unit ON block.id=block_id WHERE business_name='storage';
SELECT * FROM unit INNER JOIN unit_type ON unit_type.id = unit.id WHERE unit_type.name='garage';
SELECT location FROM business INNER JOIN location ON business.id=location.business_id ;
SELECT * FROM unit_type WHERE width > '3';
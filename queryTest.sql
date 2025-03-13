CREATE TABLE parent (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   parent_id INT
);

INSERT INTO parent (name, parent_id) VALUES 
('Ilham', NULL),
('Irwan', 2),
('Arka', 3);


SELECT 
    child.id, 
    child.name, 
    parent.name AS parent_name
FROM PARENT AS child
LEFT JOIN PARENT AS parent 
ON child.parent_id = parent.id;

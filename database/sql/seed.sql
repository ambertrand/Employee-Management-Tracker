use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Marketing'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 120000, 1),
    ('Salesperson', 70000, 1),
    ('Marketing Manager', 90000, 2),
    ('Marketing Associate', 50000, 2),
    ('Engineering Director', 160000, 3),
    ('Software Engineer', 85000, 3),
    ('Accounting Manager', 160000, 4),
    ('Accountant', 125000, 4),
    ('Legal Team Lead', 280000, 5),
    ('Lawyer', 160000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Joe', 'Dirt', 2, 1),
    ('Happy', 'Gilmore', 3, NULL),
    ('Tom', 'Cruise', 4, 3),
    ('Matthew', 'Barry', 5, NULL),
    ('Field', 'Yates', 6, 5),
    ('Tina', 'Baker', 7, NULL),
    ('Daniel', 'Dopp', 8, 7),
    ('Alex', 'Bertrand', 9, NULL),
    ('Dwayne', 'Johnson', 10, 9);

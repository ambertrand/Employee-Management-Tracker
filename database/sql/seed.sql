INSERT INTO department (id, name)

VALUES
(1, "Sales"),
(2, "Engineering"),
(3, "Finance"),
(4, "Legal");

INSERT INTO role (id, title, salary, department_id)

VALUES
(1, "Sales Lead", 100000, 1),
(2, "Salesperson", 60000, 1),
(3, "Engineering Director", 160000, 2),
(4, "Accountant", 115000, 3),
(5, "Lawyer", 210000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)

VALUES
(1, "Nicole", "K", 2, null);
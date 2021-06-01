1.a) Retira a coluna de salario dos atores
b) Altera a coluna de genero para uma coluna de sexo, com limitação de no máximo 6 caracteres.
c) Altera o limite de caracteres da colunas de genero.

5.a) Essa query retorna o número de pessoas de cada gênero na table.

6.d) O filme foi apagado, mas mesmo assim, o MySql permitiu a alteração na sinopse.

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
UPDATE Actor SET name = "Fernanda Montenegro", birth_date = "2021-05-25" WHERE id = "003";
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
SELECT MAX(salary) FROM Actor;
SELECT MIN(salary) FROM Actor WHERE gender = "female";
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
SELECT id, name FROM Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY salary;
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
ALTER TABLE Movies ADD playing_limit_date DATE;
ALTER TABLE Movies CHANGE rate rate FLOAT;
UPDATE Movies SET playing_limit_date = "2021-05-25" WHERE id="002";
UPDATE Movies SET playing_limit_date = "2021-03-25" WHERE id="003";
DELETE FROM Movies WHERE id = "001";
UPDATE Movies SET synopsis = "filme apagado" WHERE id="001";
SELECT COUNT(*) FROM Movies WHERE rate > 7.5;
SELECT AVG(rate) FROM Movies;
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > curdate();
SELECT COUNT(*) FROM Movies WHERE release_date > "2021-05-25";
SELECT MAX(rate) FROM Movies;
SELECT MIN(rate) FROM Movies;
SELECT * FROM Movies ORDER BY name;
SELECT * FROM Movies ORDER BY name LIMIT 5;
SELECT * FROM Movies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
select * from Movies order by rate desc limit 3;
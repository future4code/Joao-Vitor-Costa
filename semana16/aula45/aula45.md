1. a) VARCHAR - limite máximo de caracteres da string, DATE - representa uma data (YYYY-MM-DD), NOT NULL - não permite que o elemento seja null, PRIMARY KEY - faz com que o elemento não possa ser null e seja único em toda a tabela.
b) O SHOW TABLES retorna todas as tabelas do servidor MySql. O SHOW DATABASES retorna as databases do servidor MySql.
c) Retorna as informções de uma tabela, suas linhas, com nomes, tipos e restrições.

2.b) O erro é o número 1062 que atesta que o elemento id está duplicado e deve ser único.
c) O erro é o número 1136 que atesta que o número de colunas não é o mesmo informado na linha 1.
d) O erro é o número 1364 que atesta que o nome não tem um valor padrão.
e) O erro é o número 1292 que atesta que o formato do elemento "birth_date" não é o mesmo informado pela query.

3.c) Não existe nenhum ator ou atriz que tenha o gender = invalid, por isso, o MySql retorna todas as colunas como null.
e) Não existe uma coluna chamada "nome", por isso o erro 1054 ocorre.

4.a) A query tem a função de selecionar apenas os atores cujos nomes comecem com A ou J e o salário seja maior do que 300000.
b)
CREATE TABLE epis (
  id SERIAL PRIMARY KEY,
  codigo VARCHAR(255),
  validade DATE,
  nome  VARCHAR(255),
  disponibilidade BOOLEAN
);

 CREATE TABLE funcionarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  cpf bigint,
  cargo VARCHAR(255)
);

INSERT INTO epis(codigo, validade, nome, disponibilidade)
VALUES ('00000','2013-06-01', 'Capacete norisk 58', false);

INSERT INTO funcionarios(nome, cpf, cargo)
VALUES ('João Fagundes','12345678900', 'Gerente geral');
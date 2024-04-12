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
  cpf int,
  cargo VARCHAR(255)
);

INSERT INTO epis(codigo, validade, nome, disponibilidade)
VALUES ('00000','2013-06-01', 'Capacete norisk 58', false);
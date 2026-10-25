-- Schema do banco `jurandir` (Juralanches)
-- Reconstruído a partir dos models em `models/` e das queries do projeto.
-- Os dados abaixo são FICTÍCIOS, apenas para desenvolvimento e testes.

CREATE DATABASE IF NOT EXISTS jurandir
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE jurandir;

CREATE TABLE IF NOT EXISTS tb_pao (
  pao_id INT AUTO_INCREMENT PRIMARY KEY,
  pao_descricao VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_queijo (
  que_id INT AUTO_INCREMENT PRIMARY KEY,
  que_descricao VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_hamburguer (
  ham_id INT AUTO_INCREMENT PRIMARY KEY,
  ham_descricao VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_acompanhamento (
  aco_id INT AUTO_INCREMENT PRIMARY KEY,
  aco_descricao VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_pedido (
  ped_id INT AUTO_INCREMENT PRIMARY KEY,
  ped_nome VARCHAR(120) NOT NULL,
  ped_endereco VARCHAR(200) NOT NULL,
  pao_id INT NOT NULL,
  que_id INT NOT NULL,
  ham_id INT NOT NULL,
  aco_id INT NOT NULL,
  CONSTRAINT fk_pedido_pao FOREIGN KEY (pao_id) REFERENCES tb_pao (pao_id),
  CONSTRAINT fk_pedido_queijo FOREIGN KEY (que_id) REFERENCES tb_queijo (que_id),
  CONSTRAINT fk_pedido_hamburguer FOREIGN KEY (ham_id) REFERENCES tb_hamburguer (ham_id),
  CONSTRAINT fk_pedido_acompanhamento FOREIGN KEY (aco_id) REFERENCES tb_acompanhamento (aco_id)
);

-- Dados fictícios
INSERT INTO tb_pao (pao_descricao) VALUES
  ('Brioche'),
  ('Australiano'),
  ('Integral');

INSERT INTO tb_queijo (que_descricao) VALUES
  ('Mussarela'),
  ('Cheddar'),
  ('Prato');

INSERT INTO tb_hamburguer (ham_descricao) VALUES
  ('Carne bovina'),
  ('Frango'),
  ('Vegetariano');

INSERT INTO tb_acompanhamento (aco_descricao) VALUES
  ('Batata frita'),
  ('Onion rings'),
  ('Salada');

INSERT INTO tb_pedido (ped_nome, ped_endereco, pao_id, que_id, ham_id, aco_id) VALUES
  ('Cliente Exemplo', 'Rua Fictícia, 100', 1, 2, 1, 1),
  ('Maria Exemplo', 'Avenida Teste, 250', 2, 1, 2, 3);

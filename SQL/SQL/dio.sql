CREATE TABLE pessoas (
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30) NOT NULL,
  nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES( 'Wellington', '1994-10-21' );
INSERT INTO pessoas (nome, nascimento) VALUES( 'Pedro', '1992-08-06' );
INSERT INTO pessoas (nome, nascimento) VALUES( 'Marcela', '1987-02-17' );

SELECT * FROM pessoa;

SELECT nome FROM pessoa;
SELECT nome, nascimento FROM pessoa;

UPDATE pessoa SET nome='Wellington Alves';
UPDATE pessoa SET nome='Wellington Alves' WHERE id=1;

DELETE FROM pessoa WHERE id=2;

SELECT * FROM pessoa ORDER BY nome;
SELECT * FROM pessoa ORDER BY nome DESC;
SELECT * FROM pessoa ORDER BY nome ASC;

SELECT COUNT(id), genero FROM pessoa GROUP BY genero;

//Consultas com JOIN

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_canal = videos.id_video
SELECT * FROM videos_canais AS vc JOIN videos AS v ON vc.fk_canal = v.id_video

SELECT v.nome_video, v.autor_video, c.nome_canal FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal

SELECT * FROM videos_canais AS vc OUTER JOIN videos AS v ON vc.fk_video = v.id_video
OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal

SELECT v.id_video, v.nome_video FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON v.id_video = vc.fk_video
UNION 
SELECT c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal

INSERT INTO  videos_canais (id_canais_video, fk_canal, fk_video) VALUES(5, 4, 5);

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal = 2
DROP DATABASE IF EXISTS matchday;
CREATE DATABASE matchday;

/* Criando a tabela de Times */
CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    state VARCHAR(2) NOT NULL CHECK (state IN ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')),
    photo_url VARCHAR(1024) NOT NULL,
    UNIQUE(name, state)
);

/* Criando a tabela de Partidas */
CREATE TABLE match (
    id SERIAL PRIMARY KEY,
    date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    team_one_id INTEGER NOT NULL REFERENCES team(id) ON UPDATE CASCADE ON DELETE NO ACTION,
    score_team_one INTEGER NOT NULL,
    team_two_id INTEGER NOT NULL REFERENCES team(id) ON UPDATE CASCADE ON DELETE NO ACTION,
    score_team_two INTEGER NOT NULL,
    team_supported_id INTEGER NOT NULL REFERENCES team(id) ON UPDATE CASCADE ON DELETE NO ACTION,
    UNIQUE(date, team_one_id, team_two_id)
);
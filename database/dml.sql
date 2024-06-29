/* Inserindo dados na tabela de Times */
INSERT INTO team (name, state, photo_url) VALUES 
    ('Flamengo', 'RJ', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png'),
    ('Palmeiras', 'SP', 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg'),
    ('Grêmio', 'RS', 'https://lh3.ggpht.com/-QD9kMw474CY/Y27VyMQTh6I/AAAAAAAAGgI/sNIjHFsp5rUsVXL2o2dWSFTDox6aGX1IgCNcBGAsYHQ/s700/gremio.png'),
    ('Corinthians', 'SP', 'https://logodetimes.com/times/corinthians/logo-do-corinthians-4096.png'),
    ('Cruzeiro', 'MG', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Logo_Cruzeiro_1996.png'),
    ('Bahia', 'BA', 'https://logodownload.org/wp-content/uploads/2017/02/bahia-ec-logo-01.png'),
    ('Botafogo', 'RJ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/1816px-Botafogo_de_Futebol_e_Regatas_logo.svg.png'),
    ('Internacional', 'RS', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/2048px-Escudo_do_Sport_Club_Internacional.svg.png'),
    ('São Paulo', 'SP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/2054px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png'),
    ('Sport', 'PE', 'https://logodownload.org/wp-content/uploads/2017/02/sport-recife-logo-escudo-1.png');

/* Inserindo dados na tabela de Partidas */
INSERT INTO match (date, team_one_id, score_team_one, team_two_id, score_team_two, team_supported_id) VALUES 
    ('01/01/2023', 1, 2, 2, 1, 1),
    ('02/01/2023', 3, 1, 4, 0, 4),
    ('03/01/2023', 5, 3, 6, 2, 5),
    ('04/01/2023', 7, 0, 8, 1, 8),
    ('05/01/2023', 9, 2, 10, 2, 10),
    ('06/01/2023', 2, 1, 1, 1, 2),
    ('07/01/2023', 4, 0, 3, 3, 3),
    ('08/01/2023', 6, 1, 5, 0, 6),
    ('09/01/2023', 8, 2, 7, 2, 7),
    ('10/01/2023', 10, 3, 9, 1, 9);
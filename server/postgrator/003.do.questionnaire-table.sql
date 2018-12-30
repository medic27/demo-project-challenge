CREATE TABLE IF NOT EXISTS questionnaire(
  id text not null PRIMARY KEY, 
  questions jsonb 
);

CREATE TABLE IF NOT EXISTS answers(
  id text not null PRIMARY KEY, 
  questionnaireId text not null, 
  name text not null,
  answers jsonb 
);

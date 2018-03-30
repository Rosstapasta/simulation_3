CREATE TABLE IF NOT EXISTS helo
(id serial primary key, auth_id text, first_name varchar(80),
last_name varchar(80), gender varchar(80), hair_color varchar(80), eye_color varchar(80),
hobby varchar(80), bday integer, bmonth varchar(80), byear varchar(80), img text);


CREATE TABLE IF NOT EXISTS helo_friends
(user_id integer, friend_id integer);



INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('bill', 'smittysomethin', 'male', 'brown', 'green', 'fishing', '23', 'March', 1999, null);

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('eric', 'smittysomethin', 'male', 'brown', 'green', 'fishing', '23', 'March', 1999, null);

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('dude', 'smittysomethin', 'male', 'brown', 'green', 'fishing', '23', 'March', 1999, null);

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('sarah', 'smittysomethin', 'female', 'brown', 'green', 'fishing', '23', 'March', 1999, null);

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('jen', 'smittysomethin', 'female', 'brown', 'green', 'fishing', '23', 'March', 1999, null);
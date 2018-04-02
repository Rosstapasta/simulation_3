CREATE TABLE IF NOT EXISTS helo
(id serial primary key, auth_id text, first_name varchar(80),
last_name varchar(80), gender varchar(80), hair_color varchar(80), eye_color varchar(80),
hobby varchar(80), bday integer, bmonth varchar(80), byear varchar(80), img text);


CREATE TABLE IF NOT EXISTS helo_friends
(user_id integer, friend_id integer);



INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('bill', 'smittysomethin', 'female', 'Blue', 'Brown', 'Hiking', '23', 'March', 1999, '
https://robohash.org/eric');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('eric', 'smittysomethin', 'female', 'Green', 'Brown', 'Hiking', '23', 'May', 1999, '
https://robohash.org/sdfw');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('dude', 'smittysomethin', 'female', 'Red', 'Blue', 'Video Games', '23', 'May', 1999, '
https://robohash.org/joey');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('sarah', 'smittysomethin', 'female', 'Blue', 'Green', 'Video Games', '23', 'May', 1999, '
https://robohash.org/sammy');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('jen', 'smittysomethin', 'female', 'Red', 'Green', 'Fishing', '23', 'March', 1999, '
https://robohash.org/jen');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('bill', 'smittysomethin', 'female', 'Blue', 'Brown', 'Hiking', '23', 'March', 1999, '
https://robohash.org/jnwfe');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('eric', 'smittysomethin', 'female', 'Green', 'Brown', 'Hiking', '23', 'May', 1999, '
https://robohash.org/mcneyv63');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('dude', 'smittysomethin', 'female', 'Red', 'Blue', 'Video Games', '23', 'May', 1999, '
https://robohash.org/ericinev67');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('sarah', 'smittysomethin', 'female', 'Blue', 'Green', 'Video Games', '23', 'May', 1999, '
https://robohash.org/ericwfeu9');

INSERT INTO helo
(first_name, last_name, gender, hair_color, eye_color,
hobby, bday, bmonth, byear, img)
VALUES ('jen', 'smittysomethin', 'female', 'Red', 'Green', 'Fishing', '23', 'March', 1999, '
https://robohash.org/eric3injef');
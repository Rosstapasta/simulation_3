update helo
set first_name = ($2), last_name = ($3), gender = ($4),
hair_color = ($5), eye_color = ($6), hobby = ($7), bday =($8),
bmonth = ($9), byear = ($10)
where id = ($1);

select * from helo
where id = ($1);
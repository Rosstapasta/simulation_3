select * from helo
where id != ($1)
limit ($3) offset ($2);
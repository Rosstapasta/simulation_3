select * from helo
where id != ($1)
limit 20 offset ($2);
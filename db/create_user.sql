insert into helo
(auth_id)
values ($1);
select * from helo
where auth_id = ($1);
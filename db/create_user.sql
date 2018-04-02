insert into helo
(auth_id, img)
values ($1, 'https://robohash.org/me');
select * from helo
where auth_id = ($1);
select * from helo
where id != ($1) and id not in ( select user_id
from helo
right join helo_friends on helo.id = helo_friends.user_id
where helo_friends.user_id != ($1));

-- select * from helo
-- where id != 12;

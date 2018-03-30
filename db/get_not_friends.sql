-- select * from helo
-- where id != ($1) and id not in ( select id
-- from helo
-- right join helo_friends on helo.id = helo_friends.user_id
-- where helo_friends.user_id != ($1));

-- select * from helo
-- where id != ($1) and id not in ( select user_id
-- from helo_friends
-- right join helo on helo_friends.user_id = helo.id
-- where helo_friends.user_id != ($1) or helo_friends.friend_id != ($1));

select * from helo
where id != 12 and id not in ( select friend_id
from helo_friends
right join helo on helo_friends.friend_id = helo.id
where friend_id != 12 or user_id != 12);

-- select * from helo
-- where id != 12;

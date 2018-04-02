select * from helo
where id != ($1) and id not in ( select friend_id
from helo_friends
right join helo on helo_friends.friend_id = helo.id
where friend_id != ($1) or user_id != ($1));

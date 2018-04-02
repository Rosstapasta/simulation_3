DELETE FROM helo_friends
where user_id = ($1) and friend_id = ($2);
select * from helo_friends;
-- notes

-- alter table tableName add

-- select * from album
-- join track on track.album_id = album.album_id;
-- where trackid = 1;

-- or subquery

-- select * from album where albumid in (select albumid from track where trackid = 1)

-- OFFSETS

-- select * from track limit 10 offset 0;
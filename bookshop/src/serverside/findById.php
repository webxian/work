<?php
    $con = mysqli_connect('127.0.0.1',"root","","book");

    mysqli_query($con,"set names utf8");
    $id = $_REQUEST['id'];

    $sql = "
        select
            b.id id,
            b.title title,
            b.price price,
            b.content content,
            avg(c.star) star
        from
            t_book b
        left join
            t_book_comment c on c.book_id = b.id
        where
            b.id = $id
    ";

    $result = mysqli_query($con,$sql);

    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

    $comsql = "
        select
            c.username username,
            c.con
    
    
    "

    while($row = mysql_fetch_array($result,MYSQLI_ASSOC)){
        array_push($resultArr,$row);
    }

    echo json_encode($resultArr);
?>
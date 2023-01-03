<?php
if($_POST["email"]) {
mail("kennethosemen2@gmail.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: kennethosemen2@gmail.com");
}
?>
<?php
if(isset($_SESSION['username'])) {
    session_destroy();
    session_start();
}
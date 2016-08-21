<?php
/**
 * Mobile Navigation
 * menu generation script
 * Version 1.0.0
 * Roderic Linguri <linguri@digices.com>
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="description" content="A Mobile-First Navigation Implementation">
  <meta name="author" content="Roderic Linguri <linguri@digices.com>">
  <title>Mobile-First Navigation</title>
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">
  <!--[if lt IE 9]>
  <script src="js/html5shiv.js"></script>
  <script src="js/respond.js"></script>
  <![endif]-->
</head>
<body>
<nav>

  <?php
    include('php/menu.php');
  ?>

  <div id="search">

  </div>
  <div id="toggle">

  </div>
</nav>
<!-- MAIN CONTENT -->
<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/ie10-viewport-bug-workaround.js"></script>
<script src="js/main.js"></script>
</body>
</html>


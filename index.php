<!doctype html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Game | v.0.0.1</title>
    </head>
    <body>
        <div class="grid-container">
            <?php 
                $element = "<div class='grid-item'></div>"; 
                $count = 6;
                for ($i = 0; $i < $count; $i++) {
                    echo $element;
                }
            ?>
        </div>
    </body>
</html>
    

<?php

if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds)
{
     for($x = $seconds; $x > 0; $x--) {
     	echo $x.". . . \n";
     	sleep(1);
     }
}

countdown(5);

die('0 All done...');
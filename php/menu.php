<?php

/**
 *
 */

$menu = array(
  'home' => null,
  'about' => array(
    'history' => array(
      'timeline',
      'awards'
    ),
    'locations' => array(
      'north',
      'south'
    )
  ),
  'products' => array(
    'smartphones' => array(
      'apple',
      'windows',
      'android'
      ),
    'computers' => array(
      'laptops',
      'desktops',
      'servers'
      ),
    'printers' => array(
      'laser',
      'inkjet'
    )
  ),
  'contact' => array(
    'email' => array(
      'directory',
      'inquiry_form'
    ),
    'locations' => array(
      'north',
      'south'
    )
  ),
);

$htm = '        <div id="menu">'.PHP_EOL;

$d = 1;
foreach ($menu as $dept=>$dcat) {
    
    $htm .= '          <div id="dept-sect-'.$d.'-0-0" class="dept-sect">'.PHP_EOL;
    $htm .= '            <div id="dept-head-'.$d.'-0-0" class="dept-head">'.PHP_EOL;
    $htm .= '              <a href="index.php?dept='.$d.'">'.ucwords(str_replace('_',' ',$dept)).'</a>';
    
    if (isset($dcat)) {
        $htm .= '<span id="dept-disc-'.$d.'-0-0" class="dept-disc"></span>';
    }
    
    $htm .= PHP_EOL.'            </div><!--./dept-head-->'.PHP_EOL;
    $htm .= '            <div id="dept-body-'.$d.'-0-0" class="dept-body">'.PHP_EOL;
    
    if (isset($dcat)) {

        $c = 1;
		foreach ($dcat as $catg=>$citm) {

			$htm .= '              <div id="catg-sect-'.$d.'-'.$c.'-0" class="catg-sect">'.PHP_EOL;
			$htm .= '                <div id="catg-head-'.$d.'-'.$c.'-0" class="catg-head">'.PHP_EOL;
			$htm .= '                  <a href="index.php?dept='.$d.'&catg='.$c.'">'.ucwords(str_replace('_',' ',$catg)).'</a><span id="catg-disc-'.$d.'-'.$c.'-0" class="catg-disc"></span>'.PHP_EOL;
			$htm .= '                </div><!--./catg-head-->'.PHP_EOL;
			$htm .= '                <div id="catg-body-'.$d.'-'.$c.'-0" class="catg-body">'.PHP_EOL;

			$i = 1;
			foreach ($citm as $item) {
			
				$htm .= '                  <div id="item-sect-'.$d.'-'.$c.'-'.$i.'" class="item-sect" onclick="window.location = \'index.php?dept='.$d.'&catg='.$c.'&item='.$i.'\'">'.PHP_EOL;
				$htm .= '                    <a href="index.php?dept='.$d.'&catg='.$c.'&item='.$i.'">'.ucwords(str_replace('_',' ',$item)).'</a>'.PHP_EOL;
				$htm .= '                  </div><!--./item-sect-->'.PHP_EOL;
				$i++;

			}

			$htm .= '                </div><!--./catg-body-->'.PHP_EOL;
			$htm .= '              </div><!--./catg-sect-->'.PHP_EOL;
			$c++;

		}
	
    }

	$htm .= '            </div><!--./dept-body-->'.PHP_EOL;
	$htm .= '          </div><!--./dept-sect-->'.PHP_EOL;

    $d++;

}

$htm .= '        </div><!--./menu-->'.PHP_EOL;

echo $htm;

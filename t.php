<?php
$a = '1';
$b = &$a;
$b = "2$b";
echo $a.", ".$b;
echo '<br><br><br><br><br><br>';
$colors=array("red", "orange", "yellow", "green", "blue");
echo sizeof($colors);
echo '<br><br><br><br><br><br>';

$input  = '1,2,3,4,5,6,7';
$arr_num = explode(",",$input);
$sum = 0;
foreach ($arr_num as $i){
    $sum += number_format($i);
}    
echo '<br>'.$sum.'<br>';

?>


<?php 
/**
 * Creates Class Foo  
 */
class Foo { 
    /**
     * Private name, only this instance can access this property.
     * @var Type
     */
    private $name; 
    /**
     * Private link, only this instance can access this property.
     * @var Type
     */
    private $link;
    /**
     * Gets triggered on creating a new class instance with a name passed through.
     * also known as constructor overloading
     * @param Type
     * @return void
     */
    public function __construct($name) { 
        $this->name = $name;
    }
    /**
     * This is run when writing data to inaccessible link property.
     * @param Foo link
     * @return void
     */
    public function setLink(Foo $link){
        $this->link = $link;
    }
    /**
     * Gets triggered on destruction of this class instance
     * @return void
     */
    public function __destruct() {
        echo 'Destroying: ', $this->name, PHP_EOL;
    }
}
?>


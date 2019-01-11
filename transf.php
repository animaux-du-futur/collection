<?php
function SetSelect($id,$type,$defaultName = null)
        {
            $lFilePath = "./images/chimere/organe/".$type;
            if (file_exists ($lFilePath)) {
                echo '<select id="drop'.$id.'" class="mselect">';
                echo "\n";
                if ($defaultName) {
                    echo '<option value="none" disabled selected><p>'.$defaultName.'</p></option>';
                    echo "\n";
                }
                echo '<option value="none"><p>Vide</p></option>';
                echo "\n";
                $lArray = array_diff(scandir($lFilePath), array('..', '.'));
                $count = 0;
                foreach ($lArray as $value) {
                    $count++;
                    echo '<option value="'.$type.'/'.$value.'"><p>'.$value.'</p></option>';
                    echo "\n";
                }
                echo '</select>';
            }
        }
 ?>

<html>
<head>
  <link rel="stylesheet" href="style/main.css">
  <link rel="stylesheet" href="style/transf.css">
  <meta charset="utf-8"/>
</head>

<body>
<div class="tableau transf">

  <div class="canvas" id="texture" style="width:100%; height:100%; overflow:hidden;">
    <img id="tex" src="images/chimere/foo.png">
  </div>

  <div class="content fixed">



    <!--div class="canvas draggable" id="dragOeuil" style="top:7vh; left:10vw; height:23vh;">
      <div style="position:relative; width:100%; height:100%">
      <img src="images/chimere/zoom-01.png" class="chi" style="height:25px; position:absolute; top:0px; left:0px">
      <img src="images/chimere/organe/oeuil/multi-oeils.gif" class="chi" style="">
      <div>
    </div-->

    <div class="canvas draggable test" id="dragOeuil" style="height:23vh;">
      <div class="control test" style="position:relative;">
        <img src="images/chimere/zoom-01.png" class="chi" style="height:25px; position:absolute; top:0px; left:0px">
        <div class="mosaique test">
          <button class="mosaique">
            <img src="images/chimere/zoom-01.png">
          </button>
          <button class="mosaique">
            <img src="images/chimere/zoom-01.png">
          </button>
          <button class="mosaique">
            <img src="images/chimere/zoom-01.png">
          </button>
          <button class="mosaique">
            <img src="images/chimere/zoom-01.png">
          </button>
        </div>
      </div>
      <img src="images/chimere/organe/oeuil/oeuil5.gif" class="chim test" id="oeuil">
    </div>
    <div class="canvas draggable" id="dragOeuil2">
      <img class="chim mirror" style="height:26vh" onwheel="resize(event)" id="oeuil2">
    </div>
		<div class="canvas draggable" id="dragOeuil3">
      <img class="chim" style="height:26vh" onwheel="resize(event)" id="oeuil3">
    </div>

    <div class="canvas draggable" id="dragNez">
      <img class="chim" style="height:20vh; margin-left:5px;" onwheel="resize(event)" id="nez">
    </div>

    <div class="canvas draggable" id="dragBou">
      <img class="chim" style="height:24vh; margin-left:30px;" onwheel="resize(event)" id="bou">
    </div>

    <div class="canvas draggable" id="dragProt">
      <img class="chim" style="height:39vh" onwheel="resize(event)" id="prot">
    </div>
    <div class="canvas draggable" id="dragProt2">
      <img class="chim mirror" style="height:39vh" onwheel="resize(event)" id="prot2">
    </div>
  </div>
</div>


<div class="footer-1 transf"><div class="fooChimere">
	<div class="aide">
		<h2>???</h2>
		<p class="instructions">\o/ Bienvenue sur la Chimère \o/<br>
			1 - Selectionne-les éléments que tu veux afficher depuis les dropdowns, <br>
			2 - Et déplace-les LENTEMENT sur l'écran <br>
			3 - ENJOY !!!</p>
	</div>
  <div class="footer-button">
    <a href="chimere.html"><h2>BACK</h2></a>
  </div>

  <div class="footer-div">
		<img class="picto" src="images/chimere/pictos/pictOeuil.svg">
    <?php SetSelect("Oeuil2","oeuil", "droite"); ?>
    <?php SetSelect("Oeuil","oeuil", "gauche"); ?>
		<?php SetSelect("Oeuil3","oeuil", "autre"); ?>
  </div>

  <div class="footer-div">
		<img class="picto" src="images/chimere/pictos/pictNez.svg">
    <?php SetSelect("Nez","nez"); ?>
  </div>

  <div class="footer-div">
    <img class="picto" src="images/chimere/pictos/pictBou.svg">
    <?php SetSelect("Bou","bou"); ?>
  </div>

  <div class="footer-div">
		<img class="picto" src="images/chimere/pictos/pictProt.svg">
    <?php SetSelect("Prot","prot"); ?>
    <?php SetSelect("Prot2","prot"); ?>
  </div>
	<div class="footer-div">
		<img class="picto" src="images/chimere/pictos/pictTex.svg">
    <?php SetSelect("Tex","tex"); ?>
  </div>
</div>

</div>
<script src="js/dragging.js"></script>
<script src="js/select.js"></script>
</body>
</html>

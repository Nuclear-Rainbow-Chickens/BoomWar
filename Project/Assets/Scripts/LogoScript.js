#pragma strict

function Start () {
 	for(;;) {
 		guiText.color = Color.red;
 		yield WaitForSeconds(0.1);
 		guiText.color = Color.yellow;
 		yield WaitForSeconds(0.1);
 		guiText.color = Color.green;
 		yield WaitForSeconds(0.1);
 		guiText.color = Color.blue;
 		yield WaitForSeconds(0.1);
 		guiText.color = Color.green;
 		yield WaitForSeconds(0.1);
 		guiText.color = Color.yellow;
 		yield WaitForSeconds(0.1);
 		
 	}
}

function Update () {

}

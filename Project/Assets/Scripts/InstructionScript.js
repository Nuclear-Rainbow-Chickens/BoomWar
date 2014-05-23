#pragma strict

function Start () {
for(;;) {
		guiText.color = Color.blue;
		yield WaitForSeconds(0.2);
		guiText.color = Color.red;
		yield WaitForSeconds(0.2);
	}
}

function Update () {
	if(Input.anyKey) {
		Application.LoadLevel(1);
	}
}
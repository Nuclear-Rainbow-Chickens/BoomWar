#pragma strict
var LeftButton:KeyCode;
var RightButton:KeyCode;
var UpButton:KeyCode;
var DownButton:KeyCode;
var speed:float;
function Start () {
	renderer.material.color = Color.magenta;
	renderer.material.color.a = 0.5f;
}

function Update () {
	if(Input.GetKey(LeftButton)) {
		transform.Translate(-1 * speed,0,0);
	}
	if(Input.GetKey(RightButton)) {
		transform.Translate(speed,0,0);
	}
	if(Input.GetKey(DownButton)) {
		transform.Translate(0,-1 * speed,0);
	}
	if(Input.GetKey(UpButton)) {
		transform.Translate(0,speed,0);
	}
}
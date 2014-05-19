#pragma strict
var LeftButton:KeyCode;
var RightButton:KeyCode;
var UpButton:KeyCode;
var DownButton:KeyCode;
var cam:Camera;
var speed:float;
private var height:float;
private var width:float;
function Start () {
	height = 2f * cam.orthographicSize;
	width = height * cam.aspect;
	renderer.material.color = Color.magenta;
	renderer.material.color.a = 0.5f;
}

function Update () {
	if((Input.GetKey(LeftButton)) && (transform.position.x > -1 * (width/2))) {
		transform.Translate(-1 * speed,0,0);
	}
	if((Input.GetKey(RightButton)) && (transform.position.x < (width/2))) {
		transform.Translate(speed,0,0);
	}
	if((Input.GetKey(DownButton)) && (transform.position.y > -2)) {
		transform.Translate(0,-1 * speed,0);
	}
	if((Input.GetKey(UpButton)) && (transform.position.y < (height/2))) {
		transform.Translate(0,speed,0);
	}
}
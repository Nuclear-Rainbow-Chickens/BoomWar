#pragma strict
var BulletColor:Color;
function Start () {
	renderer.material.color = BulletColor;
	yield WaitForSeconds(5);
	Destroy(gameObject);
}

function Update () {

}
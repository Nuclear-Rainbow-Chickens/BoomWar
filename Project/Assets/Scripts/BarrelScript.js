#pragma strict
var CrossChair:Transform;
var BarrelHue:Color;
function Start () {
	renderer.material.color = BarrelHue;
}

function Update () {
	transform.LookAt(CrossChair.position);
}
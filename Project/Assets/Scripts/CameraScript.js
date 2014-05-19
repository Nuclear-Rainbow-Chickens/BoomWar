#pragma strict
var CrossChair:Transform;
function Start () {
}

function Update () {
	transform.LookAt(CrossChair.position);
}
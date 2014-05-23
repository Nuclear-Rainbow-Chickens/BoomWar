#pragma strict
var control:GameObject;
function Start () {

}

function Update () {
	guiText.text = control.GetComponent(TrophyScript).txt;
	guiText.color = control.GetComponent(TrophyScript).TextColor;
}
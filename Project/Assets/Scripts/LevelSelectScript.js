#pragma strict
var LevelModifier:int;
var On1Key:int;
var On2Key:int;
var On3Key:int;
var On4Key:int;
var On5Key:int;
var On6Key:int;
var On7Key:int;
var On8Key:int;
var On9Key:int;
function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.Keypad1)) {
		Application.LoadLevel(On1Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad2)) {
		Application.LoadLevel(On2Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad3)) {
		Application.LoadLevel(On3Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad4)) {
		Application.LoadLevel(On4Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad5)) {
		Application.LoadLevel(On5Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad6)) {
		Application.LoadLevel(On6Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad7)) {
		Application.LoadLevel(On7Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad8)) {
		Application.LoadLevel(On8Key + LevelModifier);
	}
	if(Input.GetKey(KeyCode.Keypad9)) {
		Application.LoadLevel(On9Key + LevelModifier);
	}
}
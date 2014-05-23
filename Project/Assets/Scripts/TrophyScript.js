#pragma strict
var txt = "";
var TextColor = Color.white;
var GameOver = false;
function Start () {
	renderer.material.color = Color.yellow;
}

function Update () {

}
function OnCollisionEnter(bullet:Collision) {
	if((bullet.collider.gameObject.tag == "player1") && (GameOver == false)) {	
		txt = "Player 1 Wins, \nEsc to return to level select";
		TextColor = Color.blue;
		GameOver = true;
		return;
	}
	else if((bullet.collider.gameObject.tag == "player2") && (GameOver == false)){	
		txt = "Player 2 Wins, \nEsc to return to level select";
		TextColor = Color.red;
		GameOver = true;
		return;
	}
}
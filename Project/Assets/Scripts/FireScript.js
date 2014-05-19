#pragma strict
var FireKey:KeyCode;
var FireRate:float;
var BulletSpeed:float;
var Bullet:GameObject;
private var canshoot = true;
function Start () {

}

function Update () {
	if((Input.GetKey(FireKey)) && (canshoot == true)) {
		fire();
	}
}
function fire() {
	canshoot = false;
	var pew = Instantiate(Bullet,transform.position,Quaternion.identity);
	pew.rigidbody.AddForce(transform.forward * BulletSpeed * 10);
	yield WaitForSeconds(FireRate);
	canshoot = true;
	
}
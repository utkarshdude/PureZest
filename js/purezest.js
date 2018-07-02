function cross (id)
{	element = document.getElementById(id);
	var cross = document.getElementsByClassName("close")[0];
	cross.onclick = function() {
	    element.style.display = "none";
	}
}
function modal (id=null,autoClose)
{
	if (autoClose === false) {
		var autoClose = false;
	} else {
		var autoClose = true;
	}
	var btn = document.getElementsByClassName("modal-btn")[0];
	if ( id != null) {
		var id = document.getElementsByClassName(id);
	} else {
		var id = btn.getAttribute('data-target');
	}
	var modal = document.getElementById(id);
	cross(id);
	btn.onclick = function() {
	    modal.style.display = "block";
	}
	if (autoClose == true) {
		window.onclick = function(event) {
	   	 	if (event.target == modal) {
	        	modal.style.display = "none";
	    	}
		}
	}
}
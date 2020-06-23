var activeSide;

function embedBtn() {
	document.getElementById("link-1").style.display = "none";
	document.getElementById("url-input-1").style.display = "block";
	document.getElementById("url-input-1").focus();
}

function directBtn() {
	document.getElementById("link-2").style.display = "none";
	document.getElementById("url-input-2").style.display = "block";
	document.getElementById("url-input-2").focus();
}

function uploadBtn() {
	document.getElementById("browse").click();
}

function sideFunction(num) {
	document.getElementById('model-box-2').style.display = "block";
	activeSide = num;
}

function AddSideEmbedURL() {
	var embedURL = document.getElementById('url-input-1').value;
	document.getElementById("side-" + activeSide).innerHTML = embedURL;
	document.getElementById("url-input-1").style.display = "none";
	document.getElementById("model-box-2").style.display = "none";
	document.getElementById("link-1").style.display = "block";
	document.getElementById('url-input-1').value = "";
}

function AddSideURL() {
	var parentSide = document.getElementById("side-" + activeSide);
	var URL = document.getElementById("url-input-2").value;
	var video = document.createElement("video");
	video.setAttribute("id", "side-video-" + activeSide);
	video.setAttribute("src", URL);
	video.setAttribute("controls", "true");
	parentSide.innerHTML = "";
	parentSide.appendChild(video);
	document.getElementById("url-input-2").style.display = "none";
	document.getElementById("model-box-2").style.display = "none";
	document.getElementById("link-2").style.display = "block";
	document.getElementById('url-input-2').value = "";
}

function uploadSide() {
	var i = 0;
	var fileinput = document.getElementById("browse");
	files = fileinput.files;
	var parentSide = document.getElementById("side-" + activeSide);
	var video = document.createElement("video");
	video.setAttribute("id", "side-video-" + activeSide);
	video.setAttribute("src", window.URL.createObjectURL(fileinput.files[0]));
	video.setAttribute("controls", "true");
	parentSide.innerHTML = "";
	parentSide.appendChild(video);
	document.getElementById("model-box-2").style.display = "none";

}

function clearSide() {
	document.getElementById("side-" + activeSide).innerHTML = "side " + activeSide;
	document.getElementById("model-box-2").style.display = "none";

}

function code() {
	var rotateY = 0, rotateX = 0;
	var scale = 1;
	var modelBox = document.getElementById("model-box");
	var popBox = document.getElementById("popup-box");
	var containerElement = document.querySelector('.container');
	var sideElement = document.querySelector('.side');
	var frontElement = document.querySelector('.front');
	var backElement = document.querySelector('.back');
	var leftElement = document.querySelector('.left');
	var rightElement = document.querySelector('.right');
	var topElement = document.querySelector('.top');
	var bottomElement = document.querySelector('.bottom');

	document.onkeydown = function (e) {
		if (e.keyCode === 37) {
			rotateY -= 4;
			document.querySelector('.cube').style.transform =
				'rotateY(' + rotateY + 'deg)' +
				'rotateX(' + rotateX + 'deg)';
		}
		else if (e.keyCode === 38) {
			rotateX += 4;
			document.querySelector('.cube').style.transform =
				'rotateY(' + rotateY + 'deg)' +
				'rotateX(' + rotateX + 'deg)';
		}
		else if (e.keyCode === 39) {
			rotateY += 4;
			document.querySelector('.cube').style.transform =
			'rotateY(' + rotateY + 'deg)' +
			'rotateX(' + rotateX + 'deg)';
		}
		else if (e.keyCode === 40) {
			rotateX -= 4;
			document.querySelector('.cube').style.transform =
			'rotateY(' + rotateY + 'deg)' +
			'rotateX(' + rotateX + 'deg)';
		}
		else if (e.keyCode === 107) {
			scale += 0.005;
			containerElement.style.width = 300 * scale + 'px';
			containerElement.style.height = 300 * scale + 'px';
			sideElement.style.width = 300 * scale + 'px';
			sideElement.style.lineHeight = 300 * scale + 'px';
			frontElement.style.transform = 'translateZ(' + 150 * scale + 'px)';
			backElement.style.transform = 'rotateY(180deg) translateZ(' + 150 * scale + 'px)';
			leftElement.style.transform = 'rotateY(-90deg) translateZ(' + 150 * scale + 'px)';
			rightElement.style.transform = 'rotateY(90deg) translateZ(' + 150 * scale + 'px)';
			topElement.style.transform = 'rotateX(90deg) translateZ(' + 150 * scale + 'px)';
			bottomElement.style.transform = 'rotateX(-90deg) translateZ(' + 150 * scale + 'px)';
			frontElement.style.height = 300 * scale;
			frontElement.style.lineHeight = 300 * scale + 'px';
			backElement.style.height = 300 * scale;
			backElement.style.lineHeight = 300 * scale + 'px';
			rightElement.style.height = 300 * scale;
			rightElement.style.lineHeight = 300 * scale + 'px';
			leftElement.style.height = 300 * scale;
			leftElement.style.lineHeight = 300 * scale + 'px';
			topElement.style.height = 300 * scale;
			topElement.style.lineHeight = 300 * scale + 'px';
			bottomElement.style.height = 300 * scale;
			bottomElement.style.lineHeight = 300 * scale + 'px';
		}
		
		else if (e.keyCode === 109 && scale > 0.524) {
			scale -= 0.005;
			containerElement.style.width = 300 * scale + 'px';
			containerElement.style.height = 300 * scale + 'px';
			sideElement.style.width = 300 * scale + 'px';
			sideElement.style.lineHeight = 300 * scale + 'px';
			frontElement.style.transform = 'translateZ(' + 150 * scale + 'px)';
			backElement.style.transform = 'rotateY(180deg) translateZ(' + 150 * scale + 'px)';
			leftElement.style.transform = 'rotateY(-90deg) translateZ(' + 150 * scale + 'px)';
			rightElement.style.transform = 'rotateY(90deg) translateZ(' + 150 * scale + 'px)';
			topElement.style.transform = 'rotateX(90deg) translateZ(' + 150 * scale + 'px)';
			bottomElement.style.transform = 'rotateX(-90deg) translateZ(' + 150 * scale + 'px)';
			frontElement.style.height = 300 * scale;
			frontElement.style.lineHeight = 300 * scale + 'px';
			backElement.style.height = 300 * scale;
			backElement.style.lineHeight = 300 * scale + 'px';
			rightElement.style.height = 300 * scale;
			rightElement.style.lineHeight = 300 * scale + 'px';
			leftElement.style.height = 300 * scale;
			leftElement.style.lineHeight = 300 * scale + 'px';
			topElement.style.height = 300 * scale;
			topElement.style.lineHeight = 300 * scale + 'px';
			bottomElement.style.height = 300 * scale;
			bottomElement.style.lineHeight = 300 * scale + 'px';
		}
		else if (e.keyCode === 73) {
			if (modelBox.style.display == "none") {
				modelBox.style.display = "block";
			}
			else {
				modelBox.style.display = "none";
			}
		}
		else if (e.keyCode === 32) {
			if (popBox.style.display == "none") {
				popBox.style.display = "block";
			}
			else {
				popBox.style.display = "none";
			}

		}

	}

};

var video = document.querySelector("#player1");

// Initializes the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// Plays the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = document.getElementById("slider").value + "%";
	video.play();
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video by 10%
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate)
});

// Increase the speed of video proportionally to slower
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= (1 / 0.9);
	console.log("Speed is", video.playbackRate)
});

// Advance the video by 10 seconds or if it reaches the end, go to the beginning
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video current time is " + video.currentTime)
});

// Mute and unmute video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// Change volume based on the slider and update the volumn information
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Current Volume is: " + video.volume)
	video.volume = this.value / 100
	console.log("New Volume is: " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// Oldschool Style and Original
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school style") 
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original style") 
	video.classList.remove("oldSchool")
});
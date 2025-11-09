let video=document.querySelector("video");

let constraints={
    audio:true,
    video:true,
}
//navigator is global obj this gives information about browser
//getUserMedia():-With the user's permission through a prompt, turns on a camera and/or a microphone on the system and provides a MediaStream containing a video track and/or an audio track with the input.
//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) =>{
    video.srcObject=stream;
});
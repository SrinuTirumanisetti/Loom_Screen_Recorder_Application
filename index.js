let video=document.querySelector("video");
let recordBtnCont=document.querySelector(".record-btn-cont");
let recordBtn=document.querySelector(".record-btn");

let recordFlag=false;

let recorder;//store undefined
let chunks=[]; //media data is stored in chunks 
let constraints={
    audio:true,
    video:true,
}
//navigator is global obj this gives information about browser
//getUserMedia():-With the user's permission through a prompt, turns on a camera and/or a microphone on the system and provides a MediaStream containing a video track and/or an audio track with the input.
//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) =>{
    console.log("streaming");
    video.srcObject=stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start",(e)=>{
        chunks=[];
    });
    recorder.addEventListener("dataavailable",(e)=>{
        chunks.push(e.data);
    })
    recorder.addEventListener("stop",e=>{
        //convert the media chunks data to video
        let blob=new Blob(chunks,{type:"video/mp4"});
        let videoURL=URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = videoURL;
        a.download="stream.mp4";
        a.click();
    })

    recordBtnCont.addEventListener("click",(e)=>{
        if(!recorder) return;
        recordFlag=!recordFlag;
        if(recordFlag){
            //start
            recorder.start();
            recordBtn.classList.add("scale-record");
        }else{
            //stop
            recorder.stop();
            recordBtn.classList.remove("scale-record");
        }
    })
});
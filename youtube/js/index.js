document.addEventListener("DOMContentLoaded", function(event){
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function(event){
        if(event.keyCode == 13){
            loadVideo(this.value);
        }
    }
    loadVideo("Đen Vâu");
});

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var videoFrame = document.getElementById(video-frame);
span.onclick = function(){
    closeVideo();
}

window.onclick = function(event){
    if(event.target == modal){
        closeVideo();
    }
}
function loadVideo(keyword){
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyCO_f4mE8n4Pw1R0XN3xUZO1tXUAXHuCHw";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API, true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var repsponseJson = JSON.parse(this.responseText);
            var htmlContent = "";
            for(var i = 0; i < repsponseJson.items.length; i++) { 
                if (repsponseJson.items[i].id.kind == 'youtube#channel'){
                    continue;
                }
                var videoId = repsponseJson.items[i].id.videoId;
                var videoTitle = repsponseJson.items[i].snippet.title;
                var videoDescription = repsponseJson.items[i].snippet.description;
                var videoThumbnail = repsponseJson.items[i].snippet.thumbnails.medium.url;
                htmlContent += '<div class="video" onclick="showVideo(\'' + video + '\'">'
                    htmlContent += '<img src="'+ videoThumbnail +'">'
                    htmlContent += '<div class=""title> + videoTitle + </div>'
                htmlContent += '</div>'
            }   
            document.getElementById("list-video").innerHTML = htmlContent;
        }else if(this.readyState == 4){
            console.log("Fails");
        }
    };
    xhr.send();
}
function closeVideo(){
    modal.style.display = "none";
        videoFrame.src = "";
}
function showVideo(videoId){
    videoFrame.src = "http://www.yuotube.com/embeb/" + videoId + "?autoplay=1";
    setTimeout(function(){
        modal.style.display = "block";
    }, 300);
}
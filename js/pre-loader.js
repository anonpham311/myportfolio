// Pre-loader
function pre_loader(){
    $("#load").fadeOut();
    $('#pre-loader').delay(0).fadeOut('slow');
}
pre_loader();

// Music player
var audioFiles = [
    {id: "1hMhu6QbsqV6ftHXZyb6NRYEfG631FGoi", track: "Lowkey", artist: "NIKI"},
    {id: "1WOzMf9p4INRW--WDRuob9tB7caF9eOfa", track: "Summer Is for Falling in Love", artist: "Sarah Kang"},
    {id: "1a9ROIjJaZ1WlUKc0Kn9qm3yele90h_Wc", track: "Heather", artist: "Conan Gray"}
  ];
  
  var fastForward = new Audio("https://drive.google.com/file/d/1hMhu6QbsqV6ftHXZyb6NRYEfG631FGoi");
  
  var currentTrack = 0;
  var audio = new Audio(`https://drive.google.com/uc?id=${audioFiles[currentTrack].id}`);
  var playing = false;
  
  function playTrack() {
    audio.play();
    playing = true;
    $(".wheel").addClass("spin1");
    $(".wheel-2").addClass("spin2");
  }
  
  function pauseTrack() {
    audio.pause();
    playing = false;
    $(".wheel").removeClass("spin1");
    $(".wheel-2").removeClass("spin2");
  }
  
  function loadAudioPlayer() {
    var label = `${audioFiles[currentTrack].track} - ${audioFiles[currentTrack].artist}`;
    audio.src = `https://drive.google.com/uc?id=${audioFiles[currentTrack].id}`;
    if(playing) {
      fastForward.play();
      setTimeout(() => { audio.play(); }, 4250);    
    }
    $("#label").html(label);  
  }
  
  function changeTrack(val) {
    if(val + currentTrack >= audioFiles.length) {
      currentTrack = 0;
    }
    else if(val + currentTrack < 0) {
      currentTrack = audioFiles.length - 1;
    }
    else {
      currentTrack += val;  
    }  
    loadAudioPlayer();
  }
  
  loadAudioPlayer()
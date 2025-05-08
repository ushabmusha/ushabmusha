function startRecording() {
    const video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        alert("Cannot access camera");
        console.error(err);
      });
  }
  
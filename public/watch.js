let peerConnection;
const config = {
 // iceServers: [
  //  {
    //    urls: "stun:stun.stunprotocol.org"
//},
   // {
    //    urls: 'turn:numb.viagenie.ca',
//credential: 'muazkh',
    //    username: 'webrtc@live.com'
   // },
//]
iceServers: [
  //{
  //  urls: ["stun:stun.l.google.com:19302"]
 // }
 {"urls":"stun:stun.xten.com"},
  {
    "urls":"stun:stun.voxgratia.org"
  },
     { 
      url: 'turn:turn.anyfirewall.com:443?transport=tcp',
      credential: 'webrtc',
      username: 'webrtc'
     },
     {
      "urls": [
      "turn:13.250.13.83:3478?transport=udp"
      ],
      "username": "YzYNCouZM1mhqhmseWk6",
      "credential": "YzYNCouZM1mhqhmseWk6"
      },{
        url: 'turn:numb.viagenie.ca',
        credential: 'muazkh',
        username: 'webrtc@live.com'
    },
    {
        url: 'turn:192.158.29.39:3478?transport=udp',
        credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
        username: '28224511:1379330808'
    },
    {
        url: 'turn:192.158.29.39:3478?transport=tcp',
        credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
        username: '28224511:1379330808'
    },
    {
        url: 'turn:turn.bistri.com:80',
        credential: 'homeo',
        username: 'homeo'
     },
     {
        url: 'turn:turn.anyfirewall.com:443?transport=tcp',
        credential: 'webrtc',
        username: 'webrtc'
    }
]
};
var  number= getUrlVars()["number"];

 

const socket = io.connect(window.location.origin);
const video = document.querySelector("video");
const enableAudioButton = document.querySelector("#enable-audio");

enableAudioButton.addEventListener("click", enableAudio)

socket.on("offer"+number, (id, description) => {
  peerConnection = new RTCPeerConnection(config);
  peerConnection
    .setRemoteDescription(description)
    .then(() => peerConnection.createAnswer())
    .then(sdp => peerConnection.setLocalDescription(sdp))
    .then(() => {
      socket.emit("answer"+number, id, peerConnection.localDescription);
    });
  peerConnection.ontrack = event => {
    video.srcObject = event.streams[0];
  };
  peerConnection.onicecandidate = event => {
    if (event.candidate) {
      socket.emit("candidate"+number, id, event.candidate);
    }
  };
});
socket.on("candidate"+number, (id, candidate) => {
  peerConnection
    .addIceCandidate(new RTCIceCandidate(candidate))
    .catch(e => console.error(e));
});

socket.on("connect", () => {
  socket.emit("watcher"+number);
});

socket.on("broadcaster"+number, () => {
  socket.emit("watcher"+number);
});

socket.on("disconnectPeer", () => {
  peerConnection.close();
});

window.onunload = window.onbeforeunload = () => {
  socket.close();
};

function enableAudio() {
  console.log("Enabling audio")
  video.muted = false;
}
//reading querry string
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}
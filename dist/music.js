const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	showlrc: 3,
	theme: '#e9e9e9',
    autoplay: false,
    audio: [
      {
        name: "All we know",
        artist: 'Phoebe Ryan&The Chainsmokers',
        url: "/uploads/All We Know - The Chainsmokers,Phoebe Ryan.mp3",
        cover: "/uploads/all we know.jpg",
		lrc: "/uploads/All We Know - The Chainsmokers,Phoebe Ryan.lrc",
      },
      {
        name: "T'en va pas",
        artist: 'Elsa',
        url: "/uploads/Ten va pas - Elsa.mp3",
        cover: "/uploads/Ten va pas.jpg",
		lrc: "/uploads/Ten va pas - Elsa.lrc",
      },
      {
        name: "The Apl Song",
        artist: "The Black Eyed Peas",
        url: "/uploads/The Apl Song - The Black Eyed Peas.mp3",
        cover: "/uploads/The Apl Song.jpg",
		lrc: "/uploads/The Apl Song - The Black Eyed Peas.lrc",
      }
    ]
});


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "All we know",
        artist: 'Phoebe Ryan&The Chainsmokers',
        url: "/uploads/All We Know - The Chainsmokers,Phoebe Ryan.mp3",
        cover: '/uploads/all we know.jpg',
		lrc: "/uploads/All We Know - The Chainsmokers,Phoebe Ryan.txt",
      },
      {
        name: "T'en va pas",
        artist: 'Elsa',
        url: "/uploads/T'en va pas - Elsa.mp3",
        cover: "/uploads/T'en va pas.jpg",
		lrc: "/uploads/T'en va pas - Elsa.txt",
      },
      {
        name: "The Apl Song",
        artist: "The Black Eyed Peas",
        url: "/uploads/The Apl Song - The Black Eyed Peas.mp3",
        cover: "/uploads/The Apl Song.jpg",
		lrc: "/uploads/The Apl Song - The Black Eyed Peas.txt",
      }
    ]
});
pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "./images/s.jpg",
  preview: "./images/asc final-01.png",
  firstScene: "circle",
  title: "Visite guidée du domicile de madame Verrouneau",
  author: "ASC IT",
  sceneFadeDuration: 1000,
  autoLoad: true,
  autoRotate: -2,

  "hotSpots": [
    {
        "pitch": -10.1,
        "yaw": -1.5,
        "type": "info",
        "text": "téléviseur smart résolution 4K",
        
    },
    {
        "pitch": -5.4,
        "yaw": -110.6,
        "type": "info",
        "text": "Escalier qui mène au premier niveau"
    },
    {
        "pitch": -9.4,
        "yaw": 222.6,
        "type": "info",
        "text": "garde manteau"
    },
    {
        "pitch": 5.4,
        "yaw": -90.6,
        "type": "info",
        "text": "Entrée principale"
    },
    {
        "pitch": -0.4,
        "yaw": 40.6,
        "type": "info",
        "text": "Chaise de detente"
    },
    {
        "pitch": 5.4,
        "yaw": 174.4,
        "type": "info",
        "text": "Mirroir de salon"
    },
    {
        "pitch": 9,
        "yaw": 107,
        "type": "info",
        "text": "Horloge"
    },
    {
        "pitch": -12,
        "yaw": 28.4,
        "type": "info",
        "text": "Pot  de fleure"
    },
    {
        "pitch": 9,
        "yaw": 144.4,
        "type": "info",
        "text": "Lampe suspendue"
    }
]
});


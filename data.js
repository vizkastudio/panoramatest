var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6543424298224707,
          "pitch": 0.02957341360793464,
          "rotation": 11.780972450961727,
          "target": "1-kuchnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuchnia",
      "name": "kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.9444105797736047,
        "pitch": 0.09087106574492054,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 2.3380789368424777,
          "pitch": 0.013705964557573225,
          "rotation": 5.497787143782138,
          "target": "0-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Virtual tour test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

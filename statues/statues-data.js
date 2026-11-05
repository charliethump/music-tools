/* Statues song data, shared by Statues.html (Charlie's version) and Statues-Sub.html (sub version).
   Upload this file to the statues folder in the music-tools repo. Both games pick up changes automatically.

   SONGS: every song: file name in statues/audio/ (without .mp3), title and artist.
   SETS:  id is what goes after # in a link (Statues.html#set1). Songs play in this order.
   CLIPS: start and stop points (seconds) for each part of each song.
          Make these with the ?mark screen, then click "Download statues-data.js" there. */

const SONGS = {
  "all-i-want-for-christmas-is-you":                {title:"All I Want for Christmas Is You", artist:"Mariah Carey"},
  "beck-loser":                                     {title:"Loser", artist:"Beck"},
  "brian-eno-an-ending-ascent":                     {title:"An Ending (Ascent)", artist:"Brian Eno"},
  "bts-dynamite":                                   {title:"Dynamite", artist:"BTS"},
  "david-bowie-heroes":                             {title:"Heroes", artist:"David Bowie"},
  "dua-lipa-levitating":                            {title:"Levitating", artist:"Dua Lipa"},
  "ewf-september":                                  {title:"September", artist:"Earth, Wind & Fire"},
  "ghostbusters":                                   {title:"Ghostbusters", artist:"Ray Parker Jr."},
  "grieg-morning-mood":                             {title:"Morning Mood", artist:"Grieg"},
  "jayz-dirt-of-your-shoulder":                     {title:"Dirt Off Your Shoulder", artist:"Jay-Z"},
  "kendrick-lamar-not-like-us":                     {title:"Not Like Us", artist:"Kendrick Lamar"},
  "mc-hammer-cant-touch-this":                      {title:"U Can’t Touch This", artist:"MC Hammer"},
  "megan-thee-stallion-savage":                     {title:"Savage", artist:"Megan Thee Stallion"},
  "mendes-mas-que-nada":                            {title:"Mas Que Nada", artist:"Sérgio Mendes"},
  "michael-jackson-billie-jean":                    {title:"Billie Jean", artist:"Michael Jackson"},
  "moster-mash":                                    {title:"Monster Mash", artist:"Bobby “Boris” Pickett"},
  "mountain-king":                                  {title:"In the Hall of the Mountain King", artist:"Grieg"},
  "mozart-rondo-alla-turca":                        {title:"Rondo alla Turca", artist:"Mozart"},
  "nagoya-marimbas":                                {title:"Nagoya Marimbas", artist:"Steve Reich"},
  "russell-dickerson-good-day-to-have-a-great-day": {title:"Good Day to Have a Great Day", artist:"Russell Dickerson"},
  "sabrina-carpenter-espresso":                     {title:"Espresso", artist:"Sabrina Carpenter"},
  "sleigh-ride":                                    {title:"Sleigh Ride", artist:"Leroy Anderson"},
  "spooky-scary-skeletons":                         {title:"Spooky Scary Skeletons", artist:"Andrew Gold"},
  "string-quartet-no61-in-d-minor":                 {title:"String Quartet No. 61 in D minor", artist:"Haydn"},
  "taylor-swift-shake-it-off":                      {title:"Shake It Off", artist:"Taylor Swift"},
  "timberlake-cant-stop-the-feeling":               {title:"Can’t Stop the Feeling!", artist:"Justin Timberlake"},
  "trepak":                                         {title:"Trepak (Russian Dance)", artist:"Tchaikovsky"},
  "vince-guaraldi-christmas-time-is-here":          {title:"Christmas Time Is Here", artist:"Vince Guaraldi Trio"}
};

const SETS = [
  {id:"set1", name:"Set 1", songs:["michael-jackson-billie-jean", "mozart-rondo-alla-turca", "mc-hammer-cant-touch-this", "sabrina-carpenter-espresso"]},
  {id:"set2", name:"Set 2", songs:["dua-lipa-levitating", "nagoya-marimbas", "beck-loser", "russell-dickerson-good-day-to-have-a-great-day"]},
  {id:"set3", name:"Set 3", songs:["megan-thee-stallion-savage", "string-quartet-no61-in-d-minor", "jayz-dirt-of-your-shoulder", "timberlake-cant-stop-the-feeling"]},
  {id:"set4", name:"Set 4", songs:["bts-dynamite", "brian-eno-an-ending-ascent", "kendrick-lamar-not-like-us", "ewf-september"]},
  {id:"set5", name:"Set 5", songs:["david-bowie-heroes", "grieg-morning-mood", "mendes-mas-que-nada", "taylor-swift-shake-it-off"]},
  {id:"halloween", name:"Halloween", songs:["moster-mash", "mountain-king", "spooky-scary-skeletons", "ghostbusters"]},
  {id:"winter", name:"Winter holidays", songs:["sleigh-ride", "vince-guaraldi-christmas-time-is-here", "trepak", "all-i-want-for-christmas-is-you"]}
];

let CLIPS = {
  "all-i-want-for-christmas-is-you":                [[0.0, 24.4], [24.4, 49.6], [50.0, 76.4], [76.4, 102.0]],
  "beck-loser":                                     [[6.6, 28.7], [29.0, 50.9], [119.8, 131.1]],
  "brian-eno-an-ending-ascent":                     [[4.0, 32.5], [32.5, 61.3], [61.3, 82.4]],
  "bts-dynamite":                                   [[0.0, 25.2], [25.2, 42.1], [42.1, 50.5], [50.5, 75.8]],
  "david-bowie-heroes":                             [[0.1, 15.6], [15.6, 41.9], [41.9, 60.7], [60.7, 77.1]],
  "dua-lipa-levitating":                            [[0.0, 19.1], [37.1, 56.2], [60.1, 79.2], [79.2, 107.5]],
  "ewf-september":                                  [[0.0, 19.1], [19.0, 39.2], [39.2, 50.5], [50.5, 65.8]],
  "ghostbusters":                                   [[0.0, 21.0], [21.0, 29.0], [29.0, 62.4], [62.4, 95.6]],
  "grieg-morning-mood":                             [[6.5, 26.5], [26.5, 57.0], [57.0, 85.8]],
  "jayz-dirt-of-your-shoulder":                     [[0.0, 20.7], [20.7, 40.7], [120.2, 139.8]],
  "kendrick-lamar-not-like-us":                     [[0.0, 23.9], [71.3, 99.8], [120.5, 137.9]],
  "mc-hammer-cant-touch-this":                      [[0.0, 14.9], [15.0, 29.8], [94.1, 116.3]],
  "megan-thee-stallion-savage":                     [[8.5, 28.6], [28.6, 45.4], [66.3, 79.6]],
  "mendes-mas-que-nada":                            [[11.0, 29.1], [29.5, 42.9], [42.9, 67.6], [67.6, 83.9]],
  "michael-jackson-billie-jean":                    [[0.0, 12.7], [12.7, 29.5], [29.5, 33.6], [33.6, 54.6], [73.9, 88.1], [88.2, 113.3]],
  "moster-mash":                                    [[9.0, 31.1], [31.1, 50.6], [50.6, 71.1], [71.1, 84.7]],
  "mountain-king":                                  [[82.0, 101.5], [101.5, 118.8], [118.8, 137.0]],
  "mozart-rondo-alla-turca":                        [[1.2, 15.7], [15.7, 29.6], [43.5, 64.8], [64.8, 92.4]],
  "nagoya-marimbas":                                [[0.0, 20.0], [37.4, 57.4], [88.0, 108.0], [198.6, 218.6]],
  "russell-dickerson-good-day-to-have-a-great-day": [[0.0, 11.1], [11.1, 31.1], [31.1, 52.9], [52.9, 63.5]],
  "sabrina-carpenter-espresso":                     [[0.0, 18.5], [18.5, 28.0], [64.4, 83.3]],
  "sleigh-ride":                                    [[5.4, 21.5], [21.5, 45.2], [45.2, 61.0], [61.0, 84.6]],
  "spooky-scary-skeletons":                         [[0.3, 12.6], [12.6, 37.5], [37.5, 49.9], [49.9, 75.0]],
  "string-quartet-no61-in-d-minor":                 [[0.4, 20.4], [20.4, 35.2], [35.2, 51.0]],
  "taylor-swift-shake-it-off":                      [[0.3, 17.2], [29.1, 41.9], [41.9, 65.3], [101.6, 126.2]],
  "timberlake-cant-stop-the-feeling":               [[0.0, 16.4], [16.3, 25.6], [24.3, 50.5], [50.5, 85.1]],
  "trepak":                                         [[0.9, 21.4], [21.4, 41.6], [41.6, 55.4], [55.4, 68.6]],
  "vince-guaraldi-christmas-time-is-here":          [[0.0, 14.8], [14.8, 34.3], [34.3, 63.9], [63.9, 83.9]]
};

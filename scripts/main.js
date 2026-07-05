
console.log("main.js is running!");

const setlist = {
    "Set-1": [
        { title: "Apache", url: "Apache.html" },
        { title: "Superstition", url: "Superstition.html" },
        { title: "You'll Be Back", url: "YoullBeBack.html" },
        { title: "Cantina Band", url: "CantinaBand.html" },
        { title: "Comfortably Numb", url: "ComfortablyNumb.html" },
        { title: "Creep", url: "Creep.html" },
        { title: "Arithmomania", url: "Arithmomania.html" },
        { title: "Chameleon", url: "Chameleon.html" },
        { title: "Carry On Wayward Son", url: "CarryOnWaywardSon.html" },
        { title: "Burning For You", url: "BurningForYou.html" },
        { title: "All Along The Watchtower", url: "AllAlongTheWatchtowerDylanHendrix.html" },
        { title: "Come Together", url: "ComeTogether.html" },
        { title: "Message In A Bottle", url: "MessageinaBottle_1pager_.html" }
    ],
    "Set-2": [
        { title: "Here Comes The Sun", url: "HereComesTheSun.html" },
        { title: "Abbey Road Medley", url: "AbbeyRoadMedley.html" },
        { title: "Curtain Call", url: "CurtainCall.html" },
        { title: "Just Like Heaven", url: "JustLikeHeaven.html" },
        { title: "Clocks", url: "Clocks.html" },
        { title: "Long Train Running", url: "LongTrainRunnin_DoobieBrothers_.html" },
        { title: "Subdivisions", url: "Subdivisions.html" },
        { title: "Love You Madly", url: "LoveyouMadly.html" },
        { title: "Penny Lane", url: "PennyLane.html" },
        { title: "Wish You Were Here", url: "WishYouWereHere.html" },
        { title: "Shine A Little Light", url: "ShineALittleLight.html" }
    ],
    "Set-3": [
        { title: "Hope", url: "Hope.html" },
        { title: "My Walden (Cm)", url: "MyWalden_CmandEm_.html" },
        { title: "Savoy Truffle", url: "SavoyTruffle.html" },
        { title: "Boa Sorte / Good Luck", url: "BoaSorteGoodLuck_2semis_.html" },
        { title: "When Your Mind's Made Up", url: "WhenYourMindsMadeup.html" },
        { title: "Smoke Alarm", url: "SmokeAlarm.html" },
        { title: "Two Of Us", url: "TwoofUs.html" },
        { title: "Losing my Religion", url: "LosingMyReligionREM.html" },
        { title: "Dark Red Pontiac", url: "DARKREDPONTIACC.html" },
        { title: "Always With Me Always With You", url: "AlwaysWithMeAlwaysWithYou.html" },
        { title: "Give Me One Reason", url: "GiveMeOneReason.html" },
        { title: "Straight Ahead", url: "StraightAheadlyricsandchords.html" },
        { title: "Bare With Me", url: "BarewithMelyricsandchords.html" }
    ]
};


// 2. Grab the HTML elements
const selector = document.getElementById('set-selector');
const songList = document.getElementById('song-list');

// 3. The Render Function


function loadSong(url) {
  // Implementation for loading a song
  
}

function renderList(setName) {
  // First, wipe the container clean
  songList.innerHTML = ''; 

  // Look up the array of songs for the chosen set
  const songs = setlist[setName];

  // Loop through the array and build the list securely
  if (songs) {
    songs.forEach(song => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      
      link.href = song.url;
      link.textContent = song.title; 
      link.addEventListener('click', function(event) {
        // THIS IS THE MAGIC LINE: It stops the link from actually opening the URL
        event.preventDefault(); 
        
        // Now run your custom function instead
        loadDocument(song.url);
      });
      listItem.appendChild(link);
      songList.appendChild(listItem);
    });
  }
}

// 4. The Event Listener
// Listen for the dropdown to change, then run the render function
selector.addEventListener('change', function(event) {
  const selectedSet = event.target.value;
  renderList(selectedSet);
});

// 5. Initialize the list on page load
// This ensures the list isn't empty when the user first arrives
// console.log("Selector found:", selector);
// console.log("List container found:", songList);
// console.log("Current value of selector:", selector ? selector.value : "N/A");
// console.log("Data for that value:", selector ? setlist[selector.value] : "N/A");
renderList(selector.value);

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
const toggleButton = document.getElementById('toggle-button');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
var song = { title: "Apache", url: "Apache.html" }; // Default song to load on page load

// 3. The Render Function
function selectSong(selectedSong) {
  song = selectedSong;
  loadSong(song);
}

function changeSong(forward) {
    const currentSet = selector.value;
    const songsInSet = setlist[currentSet];

    if (!songsInSet || songsInSet.length === 0) {
        return;
    }

    const currentIndex = songsInSet.findIndex(s => s.title === song.title);
    const setIndex = parseInt(currentSet.split("-")[1], 10);

    if (forward) {
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % songsInSet.length : 0;

        if (nextIndex === 0 && currentIndex === songsInSet.length - 1 && setIndex < 3) {
            const nextSet = `Set-${setIndex + 1}`;
            selector.value = nextSet;
            renderList(nextSet);
            selectSong(setlist[nextSet][0]);
            return;
        }

        selectSong(songsInSet[nextIndex]);
    } else {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : songsInSet.length - 1;

        if (currentIndex === 0 && setIndex > 1) {
            const prevSet = `Set-${setIndex - 1}`;
            selector.value = prevSet;
            renderList(prevSet);
            selectSong(setlist[prevSet][setlist[prevSet].length - 1]);
            return;
        }

        selectSong(songsInSet[prevIndex]);
    }
}

function loadSong(song) {
  // Implementation for loading a song
  let songUrl = `cheat-sheets/${song.url}`;
  fetch(songUrl)
      .then(response => response.text())
      .then(htmlString => {
        document.getElementById('main-content').innerHTML = htmlString;
        oldSongTitle = document.getElementById('song-title').textContent;
        document.getElementById('song-title').textContent = song.title;
        songId = `song-${song.title.replace(/\s+/g, '-')}`;
        oldSongId = `song-${oldSongTitle.replace(/\s+/g, '-')}`;
        document.getElementById(oldSongId).classList.remove('selected-song');
        document.getElementById(songId).classList.add('selected-song');
      });
  
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
      link.id = `song-${song.title.replace(/\s+/g, '-')}`; // Replace spaces with hyphens for ID 
      link.addEventListener('click', function(event) {
        event.preventDefault();
        selectSong(song);
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

toggleButton.addEventListener('click', function() {
  const leftBar = document.querySelector('.left-bar');
    if (leftBar.style.display === 'none') {
        leftBar.style.display = 'block';    
    }
    else {
        leftBar.style.display = 'none';
    }  
});

previousButton.addEventListener('click', function() {
    changeSong(false);
});

nextButton.addEventListener('click', function() {
    changeSong(true);
});
// 5. Initialize the list on page load
// This ensures the list isn't empty when the user first arrives
// console.log("Selector found:", selector);
// console.log("List container found:", songList);
// console.log("Current value of selector:", selector ? selector.value : "N/A");
// console.log("Data for that value:", selector ? setlist[selector.value] : "N/A");

renderList(selector.value);
selectSong(song);
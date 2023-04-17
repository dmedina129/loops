for (let i = 1000; i > 0 ; i-=2 ) {
    console.log(i);
}

for(let i = 0; i <=10000; i++) {
    if (i == 2500) {
        alert("A quarter of the way there!");
    } if (i == 5000) {
        alert("Half way there!");
    } if (i == 10000) {
        alert("The loop is done!");
    }
} 

const favoriteShows = [" Greys Anatomy", " Manifest ", " The 100 ", " Sense 8 ", " Money Heist "];

for( let i = 0; i < favoriteShows.length; i++) {

  console.log("My" + " #" + (i + 1) + " TV show is" + favoriteShows[i]);
}
var games = [
    "Minecraft",
	"Destiny",
    "Call of Duty BO3"
    
];

var gamesprice = [
    49.99,
    59.99,
    79.99
];

var gamesdescription = [
    "Minecraft is a game about breaking and placing blocks. At first, people built structures to protect against nocturnal monsters, but as the game grew players worked together to create wonderful, imaginative things.",
    "From the Creators of Halo and the company that brought you Call of Duty. In Destiny you are a Guardian of the last city on Earth, able to wield incredible power. Explore the ancient ruins of our solar system, from the red dunes of Mars to the lush jungles of Venus. Defeat Earth’s enemies. Reclaim all that we have lost. Become legend.",
    "Call of Duty: Black Ops III takes place in 2065, 40 years after the events of Black Ops II, in a world facing upheaval from climate change and new technologies. In response to the drone assaults of Black Ops 2, several countries around the world have developed high-tech air defenses that render conventional air forces virtually useless."
];

var gamesimage = [
    "./pics/minecraft.jpg",
    "bo3.jpg",
    "destiny.png"
];

if (typeof $.cookie('cart') === null){
var cart="";
}
else {
var cart = typeof $.cookie('cart');
}


function wgame() {

var x = gamesimage[0];
var r = games[0];
var h = gamesdescription[0];

cart += "<table> <tr> <td rowspan=\"2\"> <img style=\"width: 100px; height: auto;\" src=" +
 x + " \" alt=\"gameimg1\"> </td> <td> <p>" + r + "</p> </tr> <tr> <td> <p>" + h + "</p> </tr> </table>"
 
 document.getElementById("gh").innerHTML = cart
 
 
}


 typeof $.cookie('cart');
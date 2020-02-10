// item names
var games = [
    "Call of Duty BO3",
    "Halo 5 Guardian",
    "Assasin's Creed Syndicate",
    "Fallout 4",
    "Grand Theft Auto 5",
    "Watch Dogs",
    "Battlefield Hardline",
    "Star Wars Battlefront",
    "Naruto Shippuden Ultimate Ninja Storm 4",
    "Rainbow Six Siege",
    "PS4 Controller",
    "PS4 Headset",
    "Logitech G910",
    "ROG Swift PG278Q",
    "Xbox One Controller",
    "Batman: Arkham City",
    "Battlefield Hardline",
    "Call of Duty: Black Ops 2",
    "Destiny",
    "Call of Duty: Black Ops 3",
    "Dragonball Xenoverse",
    "Fifa 15",
    "Grand Theft Auto V",
	"Just Dance 2015",
	"The Last Of Us",
	"Marvel: Lego Avengers",
	"Naruto Shippuden Ultimate Ninja Storm Revolution",
	"NBA2K16",
	"NHL15",
	"Tales of Zestiria",
	"Playstation Move",
	"PS3 Wireless Keyboard",
	"PS3 Controller",
	"Playstion Move Camera",
	"Playstation 3D Glasses",
	"Until Dawn",
	"Uncharted 4 A Theif's End",
	"Tom Clancy's: The Divison",
	"NHL 16",
	"Need For Speed",
	"Naruto Shippuden Ultimate Ninja Storm 4",
	"Minecraft Story Mode",
	"Far Cry Primal",
	"Fallout 4",
	"Star Wars: Battlefront",
	"PS4 Usb Hub",
	"PS4 Controller Thumb Grips",
	"PS4 Headset",
	"PS4 Custom Controller",
	"PS4 Controller Skin",
	"Razer Blackwidow Ultimate",
	"Razer Naga Gaming Mouse",
	"Razer Kraken Headset",
	"Razer Mouse Pad",
	"Razer Nabu",
	"Logitech HD Webcam C615",
	"Logitech Performance Mouse MX",
	"Logitech G910",
	"Logitech Hard Surface Mouse Pad",
	"Logitech G633 Artemis Spectrum RGB",
    
];

// item price
var gamesprice = [
    79.99,
    74.99,
    79.99,
    79.99,
    69.99,
    19.99,
    34.99,
    79.99,
    79.99,
    79.99,
    74.99,
    119.99,
    119.99,
    949.99,
    64.99,
    14.99,
    39.99,
    24.99,
    39.99,
    44.99,
    39.99,
    29.99,
    34.99,
    29.99,
    19.99,
    59.99,
    19.99,
    39.99,
    29.99,
    64.99,
    34.99,
    22.30,
    42.99,
    49.99,
    29.99,
    74.99,
    79.99,
    79.99,
    79.99,
    79.99,
    79.99,
    34.99,
    79.99,
    79.99,
    79.99,
	9.99,
	4.99,
	119.99,
	39.99,
	12.99,
	262.48,
	99.32,
	136.48,
	37.99,
	99.99,
	89.99,
	89.99,
	119.99,
	29.99,
	199.99,
];

//item description
var gamesdescription = [
    "Call of Duty: Black Ops III takes place in 2065, 40 years after the events of Black Ops II, in a world facing upheaval from climate change and new technologies. In response to the drone assaults of Black Ops 2, several countries around the world have developed high-tech air defenses that render conventional air forces virtually useless.",
	"Halo 5: Guardians is a first-person shooter video game developed by 343 Industries and published by Microsoft Studios for the Xbox One home video game console. Part of the Halo series, the game was released on October 27, 2015. Halo 5's plot follows two fireteams of human supersoldiers; when Blue Team, led by Master Chief, goes absent without leave to track down the artificial intelligence construct Cortana, the Master Chief's loyalties are called into question and Jameson Locke and Fireteam Osiris are sent to retrieve him.",
	"Assassin's Creed Syndicate is set in a fictional history of real world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The story is set in Victorian era London and follows twin assassins Jacob and Evie Frye as they navigate the corridors of organized crime, and take back the city from Templar control. The open world design lets players freely roam London.",
	"Fallout 4 is set in a post-apocalyptic Boston in the year 2287, 210 years after a devastating nuclear war, in which the player character emerges from an underground bunker known as Vault 111. Gameplay is similar to that of Fallout 3 and Fallout: New Vegas. The player completes various quests and acquires experience points to level up their character.",
	"Grand Theft Auto V is played from either a third-person or first-person view and its world is navigated on foot or by vehicle. Players control the three lead protagonists throughout the single-player mode, switching between them both during and outside of missions. The story is centred on the heist sequences, and many of the missions involve shooting and driving gameplay.",
	"Watch dogs is played from a third-person perspective and its world is navigated on-foot or by vehicle. Players control Aiden Pearce, a highly skilled grey hat hacker who can hack into the \"ctOS\", a centralized operating system which manages the hyper-connected city of Chicago, and formed after the Northeast blackout of 2003 was caused by a hacker.",
	"Battlefield Hardline is a first-person shooter video game developed by Visceral Games in collaboration with EA DICE and published by Electronic Arts. It was released in March 2015 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 and Xbox One. Unlike the previous games in the Battlefield series, Hardline focuses on crime, heist and policing elements instead of military warfare.",
	"Star Wars Battlefront is an action game played from either a first-person or third-person view; players can switch views whenever desired, similar to previous games, except when controlling \"hero\" characters or their personal guards.[10] Players traverse planets from the original Star Wars trilogy, such as Endor, Hoth, Tatooine, and Sullust, as well as environments from the sequel trilogy, most notably Jakku.",
	"Ultimate Ninja Storm 4 features gameplay akin to that of previous games in the series, in which players battle each other in 3D arenas. A returning feature which was omissed since the original Ultimate Ninja Storm is the ability to Wall Run. Players will be able to dynamically take to battle to the sides of the arenas, and battle on the walls of each stage. A major change to the feature is the ability to have one character be on the wall, while the other stays on the field.",
	"Tom Clancy's Rainbow Six Siege is a first-person tactical shooter, in which players take control of an operator from the Rainbow team, a counter-terrorist unit. Different operators have different races, perks, bombs and equipment.[4] The game features an asymmetrical structure whereby the teams are not always balanced in their ability choices.",
	"Experience the evolution of controllers",
	"A Headset for Gamers: Experience everything from the big booms to whisper-quiet warnings in stunning 7.1 virtual surround sound and chat with friends through the hidden noise cancelling microphone.",
	"Exclusive Romer-G  mechanical switches make Orion Spark key actuation up to 25 percent faster. Faster keys give you the edge in battles where every millisecond matters.",
	"Forged for Gaming Perfection: The world's first WQHD G-SYNC monitor with rapid 144Hz refresh rate and 1ms response time.",
	"Experience the action like never before with the Xbox One Wireless Controller. New Impulse Triggers deliver fingertip vibration feedback, so you can feel every jolt and crash in high definition. It features redesigned thumbsticks and an all new D-pad provide greater precision. And the entire controller fits more comfortably in your hands.",
	"Arkham City is based on the franchise's long-running comic book mythos. In the game's main storyline, Batman is incarcerated in Arkham City, a huge new super-prison enclosing the decaying urban slums of fictional Gotham City. He must uncover the secret behind the sinister scheme, \"Protocol 10\", orchestrated by the facility's warden, Hugo Strange. ",
	"Battlefield Hardline is a first-person shooter video game developed by Visceral Games in collaboration with EA DICE and published by Electronic Arts. It was released in March 2015 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 and Xbox One. Unlike the previous games in the Battlefield series, Hardline focuses on crime, heist and policing elements instead of military warfare.",
	"Black Ops II is the first game in the Call of Duty franchise to feature future warfare technology and the first to present branching storylines driven by player choice as well as selecting weapons before starting story mode missions. It also offers a 3D display option.",
	"Players take on the role of a Guardian, defenders of Earth's last safe city, simply called The Last City, as they wield a power called Light to protect the City from different alien races. The Guardians are tasked with reviving a celestial being called the Traveler, while journeying to different planets to investigate and destroy the alien threats before humanity is completely wiped out.",
	"Call of Duty: Black Ops III takes place in 2065, 40 years after the events of Black Ops II, in a world facing upheaval from climate change and new technologies. In response to the drone assaults of Black Ops 2, several countries around the world have developed high-tech air defenses that render conventional air forces virtually useless.",
	"Dragon Ball XenoVerse is set almost entirely within a number of 3D battle arenas which are mostly modeled after notable locations in Dragon Ball universe, accessed from the main hub – the Toki-Toki City. Fighters can traverse the levels free-roaming in large spaces and can fight on ground, in the air and underwater.",
	"FIFA 16 innovates across the entire pitch to deliver a balanced, authentic, and exciting football experience that lets you play your way, and compete at a higher level. You’ll have Confidence in Defending, take Control in Midfield, and you’ll produce more Moments of Magic than ever before. FIFA 16 – Play Beautiful.",
	"Grand Theft Auto V is played from either a third-person or first-person view and its world is navigated on foot or by vehicle. Players control the three lead protagonists throughout the single-player mode, switching between them both during and outside of missions. The story is centred on the heist sequences, and many of the missions involve shooting and driving gameplay.",
	"As with previous installments, players select a song, and then follow the motions of on-screen dancer(s) and their choreographed routine. Players are judged on a ranking scale for the accuracy of each of their moves in comparison to that of the on-screen dancer. The game supports the use of each console's motion controller accessories.",
	"The Last of Us is played from a third-person perspective; players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. \"Listen mode\" allows players to locate enemies through a heightened sense of hearing and spatial awareness.",
	"Lego Avengers features over two hundred playable characters, including returning ones from the previous game. The heroes will not just be drawn from the Marvel Cinematic Universe, but the comics as well. Director Arthur Parsons stated \"It's a celebration of everything Avengers. Comic books, movies, cartoons. It's everything you love about the Avengers in video games.",
	"Naruto Shippuden: Ultimate Ninja Storm Revolution introduces guard-break and counterattack and 100 characters and 14 only support characters . In the former, the player breaks the guard of the opponent, knocking him or her unconscious. This gives the player the opportunity to unleash a deadly attack to inflict serious damage. There is a limit, however, on the number of times it can be used.",
	"NBA 2K16 simulates the experience of the National Basketball Association. Players play NBA games with real or created players and teams in various game modes, such as MyCareer, MyTeam, and standard games. Players may play regular season NBA games, playoff games, Summer League games, and others. Apart from the NBA, Euroleague teams are also featured, thus simulating the Euroleague.",
	"NHL 15 is an ice hockey video game developed by EA Canada and published by EA Sports. It is the 24th installment of the NHL series and was released on September 9, 2014 in North America then three days later in Europe, Australia and New Zealand.[1] The game serves as the debut entry in the series for eighth generation consoles, receiving releases on the PlayStation 4 and the Xbox One. Patrice Bergeron of the Boston Bruins is the official cover athlete.",
	"Tales of Zestiria follows Sorey, a young man blessed with powers by a mystical spirit race known as the Seraphim who act as a stabilizing force in the land, as he travels to free the land of Glenwood from the threat of the Hellion, creatures spawned by negative emotions. ",
	"Play the newest titles with motion support.",
	"Make chating with your freinds easier with a hassle free keyboard.",
	"Experience Playstation even better.",
	"Play the newest titles with motion support.",
	"Experience games and movies in full 1080p 3D quality.",
	"Until Dawn is designed to be played multiple times, as players cannot see all content with a single play-through. Each playthrough lasts about nine hours in length and the game mechanics utilize an in-game system called the \"Butterfly Effect\" in which any choice of action by the player may cause unforeseen consequences later on.",
	"Uncharted 4 is set three years after the events of Uncharted 3: Drake's Deception with Nathan \"Nate\" Drake, now retired as a fortune hunter, settled into a normal life with his wife Elena Fisher. His world is then turned upside down when his older brother Sam, long believed dead, suddenly reappears seeking Drake's help.",
	"The Division takes place in mid-crisis New York, an open world with destructive environments that is free for players to explore. The player's mission is to restore order by investigating the source of a virus. Players have to team up with other Division agents as they progress.",
	"NHL 16 contains several game modes, including Be a GM, a mode where you control the general manager of a team of your choice, Be a Pro, a mode where you control your own custom player and progress his career, Hockey Ultimate Team, a mode where you collect cards of real-life players, build a team, and then take on either players online or A.I. teams, and EA Sports Hockey League, abbreviated as EASHL, a multiplayer-only mode where you can use your own custom player to join other teams, also with custom players controlled by other people, and take on other teams.",
	"Need for Speed has a redesigned 'Wrap Editor', and body modifications return to the series after nearly 5 years. The game features real-life tuning companies including RAUH-Welt Begriff, SEIBON, and RTR Mustang. A new 'Handling Slider' was exhibited in the E3 gameplay video, which combines the best elements of the earlier Black Box titles' grippy tires, as well as the drift style of the newer Criterion titles.",
	"Ultimate Ninja Storm 4 features gameplay akin to that of previous games in the series, in which players battle each other in 3D arenas. A returning feature which was omissed since the original Ultimate Ninja Storm is the ability to Wall Run. Players will be able to dynamically take to battle to the sides of the arenas, and battle on the walls of each stage.",
	"Minecraft: Story Mode is an episodic interactive comedy-drama point-and-click graphic adventure video game similar to Telltale's other games, released as a number of episodes. The player will collect items, solve puzzles, and talk to non-player characters through conversation trees to learn about the story and determine what to do next.",
	"Far Cry Primal is set during the beginning Mesolithic period, ca. 12,000 years before present, in the fictional land of Oros, an open world filled with wildlife such as mammoths and saber-toothed cats. Survival is a daily challenge as tribes come into conflict with one another and nature.",
	"Fallout 4 is set in a post-apocalyptic Boston in the year 2287, 210 years after a devastating nuclear war, in which the player character emerges from an underground bunker known as Vault 111. Gameplay is similar to that of Fallout 3 and Fallout: New Vegas. The player completes various quests and acquires experience points to level up their character.",
	"Star Wars Battlefront is an action game played from either a first-person or third-person view; players can switch views whenever desired, similar to previous games, except when controlling \"hero\" characters or their personal guards.[10] Players traverse planets from the original Star Wars trilogy, such as Endor, Hoth, Tatooine, and Sullust, as well as environments from the sequel trilogy, most notably Jakku.",
	"Extend your PS4's capability with an extra 3 USB ports.",
	"Improved your aim and gameplay with the PS4 thumb grips.",
	"7.1 surround sound to bring you the true realistic gameplay.",
	"Experience dual play gaming with an extra controller for a freind.",
	"Style up your controller with a new cartoon controller skin.",
	"Improve your gameplay with special mechanical keys for expert gamers.",
	"1800 DPI for extreme accuracy in first person shooters.",
	"7.1 surround sound for realistic gameplay.",
	"Improve quality of gameplay to stop unwanted mouse movement.",
	"Keep in contact with your friends wherever you are.",
	"Chat with your friends with a 720pHD camera.",
	"Ergonomic Mouse for extensive amounts of computer work.",
	"Improve your gameplay with special mechanical keys for expert gamers.",
	"Improve quality of gameplay to stop unwanted mouse movement.",
	"Improve your gameplay with high DPI sensors for extreme accuracy in game.",
	];

//item picture location
var gamesimage = [
    "pics/bo31.jpg",
    "pics/halo5.jpg",
    "pics/creeds.jpg",
    "pics/fallout4.jpg",
    "pics/gtav.jpg",
    "pics/watchdogs.jpg",
    "pics/battlefieldh.jpg",
    "pics/starwars.jpg",
    "pics/naruto.png",
    "pics/sixsiege.jpg",
	"pics/ps4controller1.png",
	"pics/ps4headset2.png",
	"pics/g910.one.png",
	"pics/rogswift1.png",
	"pics/xboxcontroller1.png",
	"pics/ps3/1.png",
	"pics/ps3/2.jpg",
	"pics/ps3/3.jpeg",
	"pics/ps3/4.jpg",
	"pics/ps3/5.jpg",
	"pics/ps3/6.jpg",
	"pics/ps3/7.jpg",
	"pics/ps3/8.jpg",
	"pics/ps3/9.jpg",
	"pics/ps3/10.jpg",
	"pics/ps3/11.jpg",
	"pics/ps3/12.jpg",
	"pics/ps3/13.jpg",
	"pics/ps3/14.jpg",
	"pics/ps3/15.jpg",
	"pics/ps3/5.png",
	"pics/ps3/6.png",
	"pics/ps3/7.png",
	"pics/ps3/8.png",
	"pics/ps3/9.png",
	"pics/ps4/1.jpg",
	"pics/ps4/2.png",
	"pics/ps4/3.jpg",
	"pics/ps4/4.png",
	"pics/ps4/5.jpg",
	"pics/ps4/6.jpg",
	"pics/ps4/7.jpg",
	"pics/ps4/8.jpg",
	"pics/ps4/9.jpg",
	"pics/ps4/10.jpg",
	"pics/ps4accessories/1.png",
	"pics/ps4accessories/2.png",
	"pics/ps4accessories/3.png",
	"pics/ps4accessories/4.png",
	"pics/ps4accessories/5.png",
    "pics/pcaccessories/1.png",
    "pics/pcaccessories/2.png",
    "pics/pcaccessories/3.png",
    "pics/pcaccessories/4.png",
    "pics/pcaccessories/5.png",
    "pics/pcaccessories/6.png",
    "pics/pcaccessories/7.png",
    "pics/pcaccessories/8.png",
    "pics/pcaccessories/10.png",
    "pics/pcaccessories/9.png",
	
];

var itemnumber = 0;
var cartprice = 0;
var cartamount = 0;
var cartoutput;

// Item information popup box
function writed(){
var x = eval("gamesimage[" + itemnumber + "]");
var c = eval("games[" + itemnumber + "]");
var d = eval("gamesdescription[" + itemnumber + "]");
var f = eval("gamesprice[" + itemnumber + "]");
document.getElementById("light3").innerHTML = "<a href = \"javascript:void(0)\" onclick = \"document.getElementById('light3').style.display='none';document.getElementById('fade3').style.display='none'\">" +
"<img src=\"pics/close.png\" alt=\"close\" style=\"width: 3%; height: auto; float: right;\">" +
"</a> <table class=\"popup\"> <tr> <td rowspan=\"3\" class=\"imgbox\"> <img style=\"width: 300px; height: auto;\" src=" +
 x + " \" alt=\"gameimg1\"> </td> <td colspan=\"2\"> <p style=\"text-align: center; font-family: kc; font-size: 20px;\">" + c +
 "</p> </tr> <tr style=\"padding-top: 30px;\"> <td colspan=\"2\" style=\"padding: 10px;\"> <p style=\"font-family: kc; letter-spacing: 1px;font-size: 16px; display: inline;\">" + d +
 "</td> </tr> <tr> <td style=\"padding: 10px;\"> <p style=\"font-family: kc; display: inline; vertical-align: middle;\"> <span style=\"vertical-align: middle\"> $" + f +
 " </span> </p> </td> <td style=\"padding: 10px;\"> <input style=\"float: right\" type=\"submit\" value=\"Add to cart\" class=\"select\" Onclick=\"itemnumber =" +
 itemnumber +"; addtocart(); document.getElementById('light2').style.display='block';document.getElementById('fade2').style.display='block';" +
 "document.getElementById('light3').style.display='none';document.getElementById('fade3').style.display='none'\"></p> </tr> </table>";
};

// Checkout information input
function checkout() {
document.getElementById("light1").innerHTML = "<a href = \"javascript:void(0)\"" +
 "onclick = \"document.getElementById('light1').style.display='none';document.getElementById('fade1').style.display='none'\">" +
 "<img src=\"pics/close.png\" alt=\"close\" style=\"width: 3%; height: auto; float: right;\">" +
 "</a><p style=\"text-align: center; font-family: kc; font-size: 20px; padding-left: 6px;\"> Checkout </p> <br>" +
 "<br> <p class=\"inputtext\" style=\"font-size: 17px; text-align: center;\"> Input shipping and contact info </p> <br>" +
 "<br> <table id=\"t1\" style=\"padding-left: 5px\"> <tr> <td> <p class=\"inputtext\"> First name: </p> </td> <td> <input type=\"text\" class=\"info\" id=\"fname\"> </td> </tr>" +
 "<tr> <td><p class=\"inputtext\"> Last name: </p> </td> <td> <input type=\"text\" class=\"info\" id=\"lname\"> </td> </tr>" +
 "<tr> <td><p class=\"inputtext\"> Street address: </p> </td> <td> <input type=\"text\" class=\"info\" id=\"saddress\"> </td> </tr>" +
 "<tr> <td><p class=\"inputtext\"> City:  </p> </td> <td> <input type=\"text\" class=\"info\" id=\"city\"> </td> </tr>" +
 "<tr> <td><p class=\"inputtext\"> Province (or state):  </p> </td> <td> <input type=\"text\" class=\"info\" id=\"prov\"> </td> </tr>" +
 "<tr> <td><p class=\"inputtext\"> Country:  </p> </td> <td> <input type=\"text\" class=\"info\" id=\"country\"> </td> </tr>" +
 "<tr> <td><p class=\"inputtext\"> Credit card number:  </p> </td> <td> <input type=\"text\" class=\"info\" id=\"ccard\"> </td> </tr> </table>" +
"<br> <br> <div style=\"margin:0 auto; width: 154px;\">" +
"<input style=\"text-align: center;\" type=\"submit\"" +
"value=\"Confirm Purchase\" class=\"select\" Onclick=\"end()\"> </div>"
}

//Proceed to Checkout Code
function end() {
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var saddress = document.getElementById("saddress").value;
var city = document.getElementById("city").value;
var province = document.getElementById("prov").value;
var country = document.getElementById("country").value;
var creditcard = document.getElementById("ccard").value;
document.getElementById("light1").innerHTML = "<a href = \"javascript:void(0)\"" +
 "onclick = \"document.getElementById('light1').style.display='none';document.getElementById('fade1').style.display='none'\">" +
 "<img src=\"pics/close.png\" alt=\"close\" style=\"width: 3%; height: auto; float: right;\">" +
 "</a> <div style=\"text-align: center; line-height: 40px; padding-top: 110px;\"> <p style=\"font-family: kc; font-size: 16px; text-align; center;\"> Thanks for shopping at JJM gaming! <br>" +
 "Your items will be sent to : <br>" + fname + "<br>" + lname + "<br>" +
 saddress +"<br>"+ city +", " + province + "<br>" + country +
 ".<br> Your bill will be sent to the following account: "+ creditcard +" <br> Expected delivery time is 10 days.</p> </div>";
}

// Add items to cart (display them in shopping cart) and calculate total
function addtocart() {
cartamount += 1;
document.getElementById("amount").innerHTML = cartamount;
eval("cartprice += gamesprice[" + itemnumber + "]");
var x = eval("gamesimage[" + itemnumber + "]");
var c = eval("games[" + itemnumber + "]");
var d = eval("gamesdescription[" + itemnumber + "]");
var g = eval("gamesprice[" + itemnumber + "]");
document.getElementById("items").innerHTML += "<table style=\" padding-top: 10px;\">" +
 "<tr> <td style=\"width: 5%;\"> <img style=\"width: 120px; height: auto;\" src=" +
 x + " \" alt=\"gameimg1\"> </td> <td> <p style=\"text-align: left; font-family: kc; font-size: 16px; padding-left: 10px;\">" + c +
 "</p> </td> <td> <p style=\"float: right; font-family: kc; font-size: 15px;\">$" +
 g +"</p> </td></tr> </table>";
document.getElementById("finalprice").innerHTML = "<hr class=\"pline\"> <p>" +
 "<span style=\"float: left; font-family: kc; font-size: 15px;\">" +
 "Total Price: </span> <span style=\"float: right; font-family: kc; font-size: 15px;\">" +
 "$" + Math.round(cartprice*100)/100 + "</span> </p> <br> <br> <br> <br> <input style=\"display: block; margin : 0 auto;\" type=\"submit\"" +
 "value=\"Proceed to Checkout\" class=\"select\" Onclick=\"checkout()\">"
};
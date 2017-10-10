var curY= function(){
	if(typeof(window.pageYoffset) == 'number')
		return window.pageYoffset;
	else if(typeof(document.documentElement.scrollTop) == 'number')
		return document.documentElement.scrollTop;
	else 
		return 0;
};

var navi_lock = function()
{
	navi = document.getElementById('navi');
	logo = document.getElementById('logo');

	window.onscroll = function()
	{
		if(curY() <= navi.offsetTop){
			if(navi.style.position == 'fixed'){
				banner.style.display = 'block';
				navi.style.position = 'static';
				scrollTo(0, navi.offsetTop);
			}
		}
		else{
			if(navi.style.position != 'fixed'){
				banner.style.display = 'none';
				navi.style.position = 'fixed';
			}
		}
	};
};

function scrollToItem(item) {
    var diff=(item.offsetTop - window.scrollY)/8
    if (Math.abs(diff)>1) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)
        window._TO=setTimeout(scrollToItem, 30, item)
    } else {
        window.scrollTo(0, item.offsetTop)
    }
}

var navi_click = function()
{
	n_top = document.getElementById('navi_top');
	n_2016 = document.getElementById('navi_2016');
	n_2015 = document.getElementById('navi_2015');
	n_2014 = document.getElementById('navi_2014');
	n_2013 = document.getElementById('navi_2013');
	n_others = document.getElementById('navi_others');
	
	n_top.onclick = function()
	{
		section = document.getElementById('navi');
		//scrollTo(0, section.offsetTop);
		scrollToItem(section);
	}
	
	n_2016.onclick = function()
	{
		section = document.getElementById('2016');
		//scrollTo(0, section.offsetTop + 150);
		scrollToItem(section);
	}
	
	n_2015.onclick = function()
	{
		section = document.getElementById('2015');
		//scrollTo(0, section.offsetTop + 150);
		scrollToItem(section);
	}
	
	n_2014.onclick = function()
	{
		section = document.getElementById('2014');
		//scrollTo(0, section.offsetTop + 150);
		scrollToItem(section);
	}
	
	n_2013.onclick = function()
	{
		section = document.getElementById('2013');
		//scrollTo(0, section.offsetTop + 150);
		scrollToItem(section);
	}
	
	n_others.onclick = function()
	{
		//section = document.getElementById('');
		//scrollTo(0, section.offsetTop);
	}
};

var showSummary = function() {
	sw = [0, 0, 0, 0];
	
	document.getElementById('s1601').onclick = function() {
		if((sw[0] & 1) == 1){
			document.getElementById('p1601').innerHTML = "스포 금지";
			document.getElementById('p1601').style.display = "inline";
			sw[0] ^= 1;
		}
		else{
			document.getElementById('p1601').innerHTML = "Set 3 years after the events of Uncharted 3, Nathan Drake has apparently left the world of fortune hunting behind. However, it doesn’t take long for adventure to come calling when Drake’s brother, Sam, re-emerges asking for his help to save his own life and offering an adventure Drake cannot resist. On the hunt for Captain Henry Avery’s long-lost treasure, Sam and Drake embark on a journey to find Libertalia, the pirate utopia deep in the forests of Madagascar. Uncharted 4: A Thief’s End takes players around the globe, through jungle isles, urban cities and snow-capped peaks on the search for Avery’s fortune.";
			document.getElementById('p1601').style.display = "block";
			document.getElementById('p1601').style.height = '250px';
			sw[0] |= 1;
		}
	}
	document.getElementById('s1602').onclick = function() {
		if((sw[0] & 2) == 2){
			document.getElementById('p1602').innerHTML = "스포 금지";
			document.getElementById('p1602').style.display = "inline";
			sw[0] ^= 2;
		}
		else{
			document.getElementById('p1602').innerHTML = "Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.";
			document.getElementById('p1602').style.display = "block";
			document.getElementById('p1602').style.height = '250px';
			sw[0] |= 2;
		}
	}
	document.getElementById('s1603').onclick = function() {
		if((sw[0] & 4) == 4){
			document.getElementById('p1603').innerHTML = "스포 금지";
			document.getElementById('p1603').style.display = "inline";
			sw[0] ^= 4;
		}
		else{
			document.getElementById('p1603').innerHTML = "There is no taking cover or stopping to regenerate health in campaign mode as you beat back Hell’s raging demon hordes. Combine your arsenal of futuristic and iconic guns, upgrades, movement and an advanced melee system to knock-down, slash, stomp, crush, and blow apart demons in creative and violent ways. In multiplayer, dominate your opponents in DOOM’s signature, fast-paced arena-style combat. In both classic and all-new game modes, annihilate your enemies utilizing your personal blend of skill, powerful weapons, vertical movement, and unique power-ups that allow you to play as a demon. DOOM SnapMap is an easy-to-use game and level editor that allows for limitless gameplay experiences on every platform. Anyone can snap together and customize maps, add pre-defined or custom gameplay, and edit game logic to create new modes. Instantly play your creation or make it available to players around the world.";
			document.getElementById('p1603').style.display = "block";
			document.getElementById('p1603').style.height = '250px';
			sw[0] |= 4;
		}
	}
	
	document.getElementById('s1501').onclick = function() {
		if((sw[1] & 1) == 1){
			document.getElementById('p1501').innerHTML = "스포 금지";
			document.getElementById('p1501').style.display = "inline";
			sw[1] ^= 1;
		}
		else{
			document.getElementById('p1501').innerHTML = 'With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format. Also known as "The Witcher III: Wild Hunt"';
			document.getElementById('p1501').style.display = "block";
			document.getElementById('p1501').style.height = '250px';
			sw[1] |= 1;
		}
	}
	document.getElementById('s1502').onclick = function() {
		if((sw[1] & 2) == 2){
			document.getElementById('p1502').innerHTML = "스포 금지";
			document.getElementById('p1502').style.display = "inline";
			sw[1] ^= 2;
		}
		else{
			document.getElementById('p1502').innerHTML = "As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.";
			document.getElementById('p1502').style.display = "block";
			document.getElementById('p1502').style.height = '250px';
			sw[1] |= 2;
		}
	}
	document.getElementById('s1503').onclick = function() {
		if((sw[1] & 4) == 4){
			document.getElementById('p1503').innerHTML = "스포 금지";
			document.getElementById('p1503').style.display = "inline";
			sw[1] ^= 4;
		}
		else{
			document.getElementById('p1503').innerHTML = "Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people.";
			document.getElementById('p1503').style.display = "block";
			document.getElementById('p1503').style.height = '250px';
			sw[1] |= 4;
		}
	}
	
	document.getElementById('s1401').onclick = function() {
		if((sw[2] & 1) == 1){
			document.getElementById('p1401').innerHTML = "스포 금지";
			document.getElementById('p1401').style.display = "inline";
			sw[2] ^= 1;
		}
		else{
			document.getElementById('p1401').innerHTML = "Choose and spearhead a team of characters into rough battles against a variety of enemies – from earth-shaking High Dragons to demonic forces from the otherworld of the Fade. Go mano y mano in visceral, heroic combat as your followers fight at your six, or switch to tactical view to coordinate lethal offensives using the combined might of your company. View the tangible results of your path through a living world – construct structures, customize outposts, and change the landscape itself as environments are re-shaped in the wake of your Inquisition. Lead a company selected from nine unique, fully-realized characters – each of whom react to your actions and choices differently, forming complex relationships both with you and with each other. Hone your own character from multiple races, customize their appearance, and select their powers and abilities as the game progresses. Extensive customization options allow you to choose everything from the color of your follower’s boots to the features of your Inquisition stronghold. Become an agent of change in a time of uncertainty and upheaval. Shape the course of empires, bring war or peace to factions in conflict, and drive the ultimate fate of the Inquisition. Will you stop the cataclysmic anarchy gripping the Dragon Age? ";
			sw[2] |= 1;
			document.getElementById('p1401').style.display = "block";
			document.getElementById('p1401').style.height = '250px';
		}
	}
	document.getElementById('s1402').onclick = function() {
		if((sw[2] & 2) == 2){
			document.getElementById('p1402').innerHTML = "스포 금지";
			document.getElementById('p1402').style.display = "inline";
			sw[2] ^= 2;
		}
		else{
			document.getElementById('p1402').innerHTML = "Fight your way through Mordor and reveal the truth of the spirit that compels you, discover the origins of the Rings of Power, build your legend and ultimately confront the evil of Sauron in this new story of Middle-earth.";
			document.getElementById('p1402').style.display = "block";
			document.getElementById('p1402').style.height = '250px';
			sw[2] |= 2;
		}
	}
	document.getElementById('s1403').onclick = function() {
		if((sw[2] & 4) == 4){
			document.getElementById('p1403').innerHTML = "스포 금지";
			document.getElementById('p1403').style.display = "inline";
			sw[2] ^= 4;
		}
		else{
			document.getElementById('p1403').innerHTML = "Mario Kart 8 introduces new racing circuit designs and antigravity karts that will have players driving upside down. Players will also enjoy a variety of series-favorite features, including the return of 12-player online competitive play, hang-gliders, underwater racing and motorbikes.";
			document.getElementById('p1403').style.display = "block";
			document.getElementById('p1403').style.height = '250px';
			sw[2] |= 4;
		}
	}
	
	document.getElementById('s1301').onclick = function() {
		if((sw[3] & 1) == 1){
			document.getElementById('p1301').innerHTML = "스포 금지";
			document.getElementById('p1301').style.display = "inline";
			sw[3] ^= 1;
		}
		else{
			document.getElementById('p1301').innerHTML = "Twenty years after a pandemic radically transformed known civilization, infected humans run amuck and survivors kill one another for sustenance and weapons - literally whatever they can get their hands on. Joel, a salty survivor, is hired to smuggle a fourteen-year-old girl, Ellie, out of a rough military quarantine, but what begins as a simple job quickly turns into a brutal journey across the country.";
			document.getElementById('p1301').style.display = "block";
			document.getElementById('p1301').style.height = '250px';
			sw[3] |= 1;
		}
	}
	document.getElementById('s1302').onclick = function() {
		if((sw[3] & 2) == 2){
			document.getElementById('p1302').innerHTML = "스포 금지";
			document.getElementById('p1302').style.display = "inline";
			sw[3] ^= 2;
		}
		else{
			document.getElementById('p1302').innerHTML = 'The sprawling sun-soaked metropolis of Los Santos is chock full of self-help coaches, starlets and C-List celebrities, once on top of the media world, now struggling to stay relevant in time of economic malaise and lowest-common-denominator reality TV. Amidst this madness, three unique criminals plan their own chances of survival and success: Franklin, a street-level hustler in search of opportunities for serious money; Michael, an ex-con whose "retirement" is a less rosy than he hoped it would be; and Trevor, a violent dude driven by the chance for a quick high and the next big score. Nearly out of options, the crew risks it all in a series of daring and dangerous heists that could set them up for life - one way or the other.';
			document.getElementById('p1302').style.display = "block";
			document.getElementById('p1302').style.height = '250px';
			sw[3] |= 2;
		}
	}
	document.getElementById('s1303').onclick = function() {
		if((sw[3] & 4) == 4){
			document.getElementById('p1303').innerHTML = "스포 금지";
			document.getElementById('p1303').style.display = "inline";
			sw[3] ^= 4;
		}
		else{
			document.getElementById('p1303').innerHTML = "Initially conceived as a floating symbol of American ideals at a time when the United States was emerging as a world power, Columbia is sent to distant shores with great fanfare by a captivated public. What begins as a fresh new endeavor of hope turns drastically wrong as the city soon disappears into the clouds to whereabouts unknown. The player takes on the role of former Pinkerton agent Booker DeWitt, sent to the lost city to rescue Elizabeth, a young lady imprisoned there since her childhood. He develops a relationship with Elizabeth, enhancing his abilities with hers so the pair may escape from a city that is literally falling from the sky. DeWitt has to learn to fight foes in high-speed Sky-Line battles, engage in combat both indoors and amongst the clouds, and harness the power of a myriad of new weapons and abilities.";
			document.getElementById('p1303').style.display = "block";
			document.getElementById('p1303').style.height = '250px';
			sw[3] |= 4;
		}
	}
}
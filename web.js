// web.js
var express = require("express");
var logfmt = require("logfmt");
var path = require('path');
var app = express();


app.use(logfmt.requestLogger());
app.use(express.static(path.join(__dirname, 'public')));
/*
app.get('/', function(req, res) {
	res.send('Sheep Facts!');
});
*/

app.get('/facts', function(req, res) {
	var fact = Math.floor(Math.random() * sheepFacts.length)
	res.setHeader('Content-Type', 'application/json');
  	res.send(JSON.stringify({fact: sheepFacts[fact], success: true}));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  	console.log("Listening on " + port);
});

var sheepFacts = ["Sheep were domesticated 10,000 years ago in Central Asia.",
"Sheep production began during biblical times.",
"Raising sheep is the oldest organized industry.",
"Man learned how to spin wool in 3,500 B.C.",
"There are over 40 breeds of sheep in the U.S. and approximately 900 different breeds around the world.",
"Sheep were smuggled into the states during the 16th and 17 centuries to develop the wool industry.",
"Along with goats sheep were first brought to America by Columbus in 1493.",
"The Navajo Churro is the oldest breed of sheep in the U.S.",
"By 1698, America was exporting wool.",
"George Washington raised sheep on his Mount Vernon Estates.",
"President Woodrow Wilson grazed sheep on the White House lawn.",
"The female sheep is called a \"ewe.\"",
"The male sheep is called a \"ram\" or \"buck.\"",
"A castrated male sheep is called a \"wether.\"",
"A baby sheep is called a \"lamb.\"",
"The act of giving birth is called \"lambing.\"",
"The doe can have 1 to 3 lambs per litter.",
"Sheep do not have teeth in their upper front jaw.",
"Sheep have 24 molars and 8 incisors.",
"Sheep were first used for meat, skins, milk and wool. Today they are still raised for these purposes plus many more.",
"One year’s growth of fleece is about 8 pounds of wool.",
"Wool sheep are usually shorn once a year.",
"Wool that comes directly from the sheep is called \"raw wool.\" Raw wool may go through 70 processing steps to make sure it is the highest quality.",
"Depending on the market, lambs are usually sold between 90-120 pounds.",
"Lamb meat is an exceptional source of vitamins and minerals.",
"Meat from a grown sheep is called \"mutton.\"",
"A group of sheep is called a flock.",
"Michigan has the largest sheep packing plant east of the Mississippi River.",
"Sheep have a split in their upper lip which allows them to select the preferred leaves off a plant.",
"In sheep, the act of breeding is called \"tubing.\"",
"The act of parturition (giving birth) in sheep is called \"lambing.\"",
"The weaning age of sheep is generally between 2-3 months of age.",
"The pasture carrying capacity for sheep is generally 5 to 6 ewes and lambs per acre.",
"An immature male ram is called a \"ram lamb\" and the female is referred to as a \"ewe lamb.\"",
"The birth weight for lambs may range from 5 to 8 pounds.",
"The life expectancy for sheep is between 6 to 11 years.",
"The average body temperature for sheep is 102.5 F.",
"The average respiration rate for sheep is 16 breaths per minute.",
"Sheep generally consume 2 to 4.5 pounds of food daily.",
"Depending on the breed, the mature weight for female ewes range from 90 to 300 pounds.",
"Like goats, sheep are also seasonal breeders. The best time to breed is between early fall to late winter. However, there are some breeds that can be bred year-round (Dorset).",
"Ewes cycle every 14-19 days during the breeding season.",
"The average pulse rate for sheep is 75 heart beats per minute.",
"The duration of estrus is 24 to 36 hours.",
"The time of ovulation is 24-30 from the beginning of estrus.",
"The gestation (pregnancy length) period for ewes is 145-155 days.",
"Breeding per year is 1-2 per year.",
"Depending on the breed, puberty is between 5 to 8 months of age for ewe lambs and 6 to 8 months for ram lambs.",
"Depending on the breed, the minimum breeding age is between 8 to 10 months for ewes lambs.",
"The mature weight of a ram is between 150 to 450 lbs.",
"One ram can service 30 to 35 ewes during a 60 day breeding season.",
"Sheep are born with long tails. Some producers dock their tails shortly after they are born.",
"Sheep have two digits on their feet.",
"Sheep milk is often used to make gourmet cheese.",
"The fat (tallow) from sheep can be used to make soap and candles.",
"Sheep are animals that are over one year of age.",
"Lambs are less than one year of age.",
"A yearling is an animal between 1 to 2 years of age that may or may not have produced offsprings.",
"In some countries, sheep are used for fighting as part of a celebratory festival such as Eid al adha, a Muslim Festival Sacrifice.",
"Like goats, sheep are susceptible to diseases such as parasites when they are mismanaged.",
"All sheep make the sound \"baa\" while goats make the sound \"maa.\"",
"Lambs can make a high pitched sound called \"bleating.\"",
"Milk from sheep have higher levels of fat, protein, riboflavin, calcium, zinc, niacin and thiamine than milk from goats and cows.",
"One pound of wool can make ten miles of yarn.",
"The small intestines of 11 sheep are needed to make 1 tennis racket.",
"There are 150 yards (450 feet) of wool yarn in a baseball.",
"Sheep have poor eyesight, but an excellent sense of hearing.",
"Sheep are considered grazers and goats are mostly browsers.",
"Sheep belong to the family Bovidae (hollowed horn), the genus Ovis and the species Ovis Aries.",
"Estrus (heat) is the period in which ewes are receptive to mating.",
"Sheep can be born with or without horns (polled).",
"Normally sheep have two teats and cows have four.",
"Signs of heat in ewes include rapid tail movement in the presence of the male, nervousness, walking the fence lines, increase vocalization for the ram, decrease appetite and milk production and redden and swollen vulua (not easy to detect).",
"Sheep have a four chamber stomach that contains fermenting bacteria and protozoan that assist in breaking down their food.",
"Rams can be quite aggressive to their handlers during the breeding season.",
"Sheep are very social creatures.",
"There are very few medications developed for used in sheep.",
"A ruminant is any hoofed animal that digests its food in two steps. First by eating the raw materials and regurgitating a semi-digested form known as \"cud\" then eating the cud. Ruminants include sheep, goats, cattle, deer, camels, llamas, giraffes, bison, buffalos etc.",
"The top ten states with the largest population of sheep (all sheep and lamb) are Texas (1,100,000), California (68,000), Wyoming (43,000), South Dakota (37,000), Colorado (36,000), Montana (30,000), Utah (26,500), Idaho (26,000), Iowa (25,000) and Oregon (21,500; NASS, 2005).",
"Healthy lambs can stand within minutes after birth and are able to move with the herd almost immediately.",
"Domestic sheep are extremly versitile and exist in a wide variety of habitats worldwide ranging from temperate mountain forests to desert conditions.",
"The skulls of domesticated sheep differ from those of wild sheep in that the eye socket and brain case are reduced. Selection for economically important traits has produced domestic sheep with or without wool, horns, and external ears. Coloration ranges from milky white to dark brown and black. There is considerable diversity among the over 200 distinct breeds of sheep.",
"Copper is regularly used in the diet in sheep at about 8-11 parts per million. It may be toxic to sheep at 15-20 parts per million. There is a narrow difference between the amount of copper required and what will be toxic to the animal. A diet should never have copper level above 25 parts per million to be safe for most sheep.",
"Domestic sheep are extremely hardy animals and can survive on a diet consisting of only cellulose, starch or sugars as an energy source and a nitrogen source which need not be protein. In general, sheep feed mainly on grasses while in pastures and can be fed a wide variety of hays and oats.",
"The Navajo-Churro rams can have two, four, six, or more horns. This is because they possess the polycerate gene, which is also found in old heritage breeds like the Jacob Sheep. They also have the ability to have fused horns",
"The Jacob sheep is a breed of primitive multihorned sheep, patterned with black and white spots.[1][2] Jacobs are grown for their wool, their meat, and their hides, but they make good pets as well. As of 2009, Jacobs are listed as threatened by the American Livestock Breeds Conservancy, which means the breed has fewer than 1,000 annual registrations in the US and estimated fewer than 5,000 global population",
"Sheep can be milked just like cows. Sheeps' milk is often used to make gourmet cheeses. Mutton, or the meat of sheep, is another food product for which the animals may be raised.",
"The fat from sheep also known as tallow, can be used to make both candles and soap. The tallow is cooked to purify it, and then molded into candles or further prepared into blocks of soap.",
"Sheep have 2 digits on each foot. The hooves grow like fingernails and need to be trimmed every few months to maintain normal conformation.",
"Sheep are ruminants. This means that they have four parts to their upper digestive tract (people only have one-the stomach) and they chew their cud.",
"Sheep can be set up on their rumps for restraint during procedures such as foot trimming and shearing.",
"For purpose of cleanliness, the tails are surgically shortened (docked) shortly after birth. In some parts of the world, tails are left undocked.",
"Short tails are less likely to become soiled with manure and are therefore, less likely to promote local infections and fly strike",
"There are many different breeds of sheep. They are classified by what kind of wool they produce. Merino and Rambouillet have fine wool. Some sheep have coarse or long wool like Cotswold, Romney, and the Barbados. But most breeds of sheep fall under the category of medium wool. Examples of sheep in this category include Columbia, Suffolk, Hampshire, Dorset, Southdown, Cheviot and Finn.",
"When sheep receive a haircut, it is called shearing. The wool that is cut off is washed to get dirt, insects, and straw that may have stuck to the sheeps' fur out. The cleaned wool is then dyed to color it. The wool is combed and spun into yarn",
"When Woodrow Wilson was President, the First Lady had sheep graze on the White House lawn to keep it neat and well trimmed.",
"President James Madison wore an inaugural jacket made from the wool of sheep raised on his Virginia farm.",
"If you see a sheep on its back, lend a hand! A sheep can’t get up from that position. If left on its back too long, it will eventually die.",
"A one-year old sheep is called a hogget",
"A two-year old sheep is called a two-tooth.",
"Sheep only have lower teeth that press against an upper palette."]
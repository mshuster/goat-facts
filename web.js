// web.js
var express = require("express");
var logfmt = require("logfmt");
var path = require('path');
var app = express();


app.use(logfmt.requestLogger());
app.use(express.static(path.join(__dirname, 'public')));
/*
app.get('/', function(req, res) {
	res.send('goat Facts!');
});
*/

app.get('/facts', function(req, res) {
	var fact = Math.floor(Math.random() * goatFacts.length)
	res.setHeader('Content-Type', 'application/json');
  	res.send(JSON.stringify({fact: goatFacts[fact], success: true}));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  	console.log("Listening on " + port);
});

var goatFacts = ["Goats were the first animals domesticated by man in 10,000 B.C",
"The phrase Judas goat is a tern that has been used to describe a goat that is trained to herd other animals to slaughter while its own life is spared.",
"Most goats can be found in Asia and the Mid-East.",
"Goats were the first animals to be used for milk by humans.",
"There are over 210 breeds of goats in the world.",
"There are approximately 450 million goats around the world.",
"Goats were first brought to America by Columbus in 1493.",
"Goats were regularly imported into America in the early 1900’s.",
"The female goat is called a \"doe\" or \"nanny.\"",
"The male goat is called a \"buck\" or \"billy.\"",
"A castrated male goat is called a \"wether.\"",
"A baby goat is called a \"kid.\"",
"The act of giving birth is called \"kidding.\"",
"The doe can have 1 to 6 kids per litter, however, 4 to 6 kids are rare.",
"Goats do not have teeth in their upper front jaw.",
"Goats have 24 molars and 8 incisors.",
"Both male and female goats can have beards.",
"Normally goats have two teats and cows have four.",
"Goats prefer browse over grass and grass to clover.",
"Goats do not eat tin cans, clothing or garbage, but are selective eaters when provided with a well-balanced diet.",
"Male goats go through a period called a \"rut\" when they are ready to mate. This period coincides with the start of the breeding season.",
"The \"rut\" is characterized by a decrease in appetite, obsessive interest in the does, fighting between bucks and most notable is a strong foul-smelly musky odor.",
"Lactating does that are kept in a pen with a musky buck may produce milk that taste \"goaty\" and can be offensive to humans.",
"Goats can be born with or without horns (polled).",
"Goats and sheep are seasonal breeders.",
"Yearlings does should be bred when they have reached 80 pounds of body weight or when they have reached 60-75% of the adult weight for their breed. They must also be in good body condition and health.",
"Chevon is the French word for goat. These are animals that are slaughtered near or shortly after weaning.",
"Goats are hollow-horned, bearded, ruminant mammals of the genus Capra and the species Hircus. They are raised for wool, milk, and meat in the U.S. Goats are also used to make gelatin, the man- ure is used for fertilizer, they are used for research models in biological studies, they are used to pull carts and for pack animals.",
"Goats are bovines and are closely related to cows and antelopes.",
"The natural life expectancy for goats is around 8 to 12 years and in some cases, goats can live over 15 years.",
"Worldwide, more people eat and drink milk from goats than any other animal.",
"The age of puberty for female goats is between 7-10 months and 4-8 months in male goats.",
"The breeding age for male goats is between 8-10 months",
"A mature, healthy male buck can breed 20 to 40 does.",
"The length of gestation (pregnancy) in does is between 146 to 155 days.",
"The traditional breeding season for goats in the U.S. is between late August and the early part of January, however some goats can breed out-of-season.",
"Goats do no like to get wet and prefer to seek shelter when it is raining.",
"Goats are more susceptible to parasites and other infectious diseases when they are mismanaged.",
"Cabrito is the Spanish word for little goat (slaughtered one week or shortly after birth).",
"Goats deposits less fat externally and more fat internally (around the organs) compared to sheep and cattle.",
"Estrus (heat) is the period in which does are receptive to mating.",
"The estrous cycle is between 18-22 days in does.",
"The duration of estrus is 12-36 hours.",
"Signs, of heat include tail wagging, mucous discharge, swollen vulva, bleating, mounting or being mounted by other goats etc.",
"The normal body temperature for goats is between 101.7 to 104.5 degrees.",
"The heart rate of goats is between 70 to 135 beats per minute.",
"The normal respiration rate for goats is 12 to 15 breaths per minute.",
"Goats are quite agile creatures and in some cases they can jump over 5 feet.",
"Goats have a four chamber stomach that contains fermenting bacteria and protozoan that aid in breaking down their food.",
"Most medications that are currently used on goats were developed for use in other livestock species (i.e., cattle and swine).",
"Bucks can be quite aggressive to their handlers during the breeding season.",
"Depending on the breed, adult female goats can weigh between 22 to 300 pounds and adult males between 27 to 350 pounds of body weight.",
"A large group of goats is called a herd.",
"A hermaphrodite is a goat that exhibits both male and female sexually characteristics and organs.",
"Azalea bushes are poisonous to goats.",
"Vomiting in goats is almost always due to poisonous plants.",
"Goats can become lame after an injection has hit the sciatic nerve. This nerve runs from the hips down to the leg.",
"Blood in the milk or \"pink\" milk may be a sign of udder trauma and not mastitis.",
"Before coins were used for money, goats were traded for silver because they were so valuable.",
"The pharaoh Cephranes thought, so much of his goats that he had 2,234 buried with him.",
"Goats are very social creatures.",
"Wattles are those little tufts of hair that covers the skin that dangles from the throat of some goats. Wattles serve no function and are thought to be remnants of gill slits that mammals shared somewhere back down the evolutionary tree.",
"A ruminant is any hoofed animal that digests its food in two steps. First by eating the raw materials and regurgitating a semi-digested form known as \"cud\" then eating the cud. Ruminants include goats, sheep, cattle, deer, camels, llamas, giraffes, bison, buffalos etc.",
"Goat’s milk is easily digestible and less allergenic than cow’s milk.",
"Goat’s milk is higher in calcium, vitamin A and niacin than cow’s milk.",
"Goat meat is lower in fat and cholesterol compared to beef, pork, mutton and poultry.",
"12,000 year old paintings of goats have been found on the walls of caves in Europe.",
"Goats are one the cleanliest animals and is much more selective feeders than cows, sheep, pigs, swine and even dogs.",
"Dairy goats have little subcutaneous fat.",
"Goats do not like eating food that has been soiled, contaminated or has been on the ground.",
"Mahatma Gandhi consumed goat milk everyday for more than 30 years.",
"Carl Sandburg loved his goats so much that when Life Magazine (1938 issue) asked him to pose for a picture with his favorite dog he insisted the picture be taken with his goats.",
"Goat’s milk is naturally homogenized and it can be digested in less than 20 minutes where as cow’s milk can take almost all day.",
"Meat goat production is the fastest growing livestock industry in the U.S. today (2005).",
"The top ten states with the largest population of meat goats are Texas (1,010,000), Tennessee (98,000), Georgia (77,000), Oklahoma (65,000), Kentucky (63,500), North Carolina (52,200), California (50,000), South Carolina (41,000), Alabama (37,800) and Florida (36,000;NASS, 2005).",
"The top ten states with the largest dairy herds are Texas (30,000), California (30,000), Wisconsin (28,000), Iowa (13,000), New York (13,000), Philadelphia (13,000), Ohio (9,500), Oklahoma (9,000), Indiana (8,800) and Missouri (8,600; NASS,2005).",
"Ethnic consumers are the backbone of the meat goat industry in the U.S. Demand for goat meat will continue to increase as the population in the U.S. becomes more ethnically diverse by consumers who traditionally eat goat meat.",
"At this time, the marketing infrastructure of the goat industry in the U.S. is relatively disorganized. Nationwide there are no mechanisms in place by which the animal is moved from the farm, to the processor and the product is accessible to the consumer.",
"To check for dehydration, pull the skin that is over the shoulder area. If the skin snaps back quickly the animal is adequately hydrated. If the skin does not snap back quickly and remains erect the animals is dehydrated.",
"Goats are herbivores (plant-eaters) that spend most of their day grazing.",
"Goats are usually between 17 to 42 inches tall from the shoulders.",
"Approximately 1.5 million pounds of goat meat is imported into the U.S. every week from Australia and New Zealand because domestic production and processing systems in this country can not keep pace with demand.",
"Goats are able to consume 3 to 5% of their body weight in dry matter (perhaps more if the forage is highly digestible). To consume this amount of forages, goats must be pastured in an area with a large quantity of available vegetative forage. Goats will eat less when they are moved to poor quality pastures.",
"In the biblical town of Jericho, people kept goats as long as 6,000 to 7,000 years before Christ.",
"Healthy kids can stand within minutes after birth and are able to move with the herd almost immediately.",
"In many parts of the world, goats are economically valuable for a variety of purposes such as skins for leather and the pelts are used for making rugs and robes.",
"The early explorers used goat skins for water and wine bottles when they traveled.",
"During biblical times, goat skins were used for parchment for writing.",
"Does can produce 3 litters of kids every 2 years.",
"Older animals store more body fat if nutritional conditions are favorable.",
"Plant poisoning most often occurs in goats in the spring after the herd has been released into a new pasture.",
"Goats do not grow as fast as sheep nor can they utilize feed as efficiently.",
"Goats do not have tear ducts.",
"Some does and bucks that are naturally polled are also infertile. They are of no use to the owner, either as breeding stock or milk producers.",
"Goats and octopus’ pupils of their eyes are rectangular.",
"Boer goats are considered the leading meat breed in the U.S. today. Mature males can weigh between 260 to 380 pounds and the females may weigh between 210-300 pounds.",
"The Tennessee Stiff-Leg also known as the wooden leg or fainting goat is native to the U.S. This breed suffers from a recessive trait called myotonia. When frightened this animal will experience extreme muscle stiffness causing extension of the neck and hind legs before it topples over onto the ground.",
"Colostrum is produced in the first milk of the doe and it contains high levels of immunoglobulins (antibodies), vitamin A, minerals, fat and energy. Newborn kids must ingest colostrum within the first 24 hours of life to help protect them against diseases.",
"The larger the scrotal circumference of the buck,the higher his libido and fertility.",
"Coffee was first discovered when goat herders noticed the animals acting very energetic after nibbling on coffee beans.",
"Abraham Lincoln’s sons had two goats that lived in the white house with them.",
"In earlier centuries, goats were often used to nurse babies.",
"China has the most goats (over 170 Million).",
"According to Roman history, on February 15th, young men would run around wearing only the skins of goats they sacrificed earlier and hit women with strips of goat skin, known as februa, to promote fertility. It is from these purification instruments that the month of February gets its name."]
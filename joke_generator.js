
const joke_array = [
    `Q: Why did the computer go to the doctor?
<br><br> A: It had a bluetooth.`,
    `Q: Why can’t your nose be 12 inches long?
<br><br> A: Because then it would be a foot.`,
    `Q: How do you get a tissue to dance?
<br><br> A: You put a little boogie in it`,
    `Q: Why did they Quit giving tests at the zoo?
<br><br> A: Because it was full of cheetahs`,
    `Q: Why is a bad joke like a pencil?
<br><br> A: Because it has no point`,
    `Q: Where do polar bears keep their money?
<br><br> A: A snow bank.`,
    `Q: What room can no one enter?
<br><br> A: A mushroom`,
    `Q: What kind of key can never unlock a
door?
<br><br> A: A monkey`,
    `Q: What has four wheels and flies?
<br><br> A: A garbage truck`,
    `Q: Why do graveyards have a fence around
them?
<br><br> A: Because people are dying to get in.`,
    `Q: What did the cheerleader say to the
ghost?
<br><br> A: Show your spirit.`,
    `Q: What did one eye say to the other?
<br><br> A: Between you and me something smells.`,
    `Q: What do you call fake noodles?
<br><br> A: Im-pasta`,
    `Q: How does the ocean say hello?
<br><br> A: It waves`,
    `Q: What do you call cheese that is not
yours?
<br><br> A: Nacho cheese`,
    `Q: What does a nosey pepper do?
<br><br> A: Gets jalapeno your business`,
    `Q: What do you call a pig that knows karate?
<br><br> A: Pork Chop`,
    `Q: Why can’t you give Elsa a balloon?
<br><br> A: Because she will let it go`,
    `Q: What is the smartest kind of bee?
<br><br> A: A spelling bee`,
    `Q: Why do bees have sticky hair?
<br><br> A: They use a honey comb`,
    `Q: What do you get when you cross an
elephant and a potato?
<br><br> A: Mashed potatoes`,
    `Q: What do you call an old snowman?
<br><br> A: Water`,
    `Q: Why is a baseball stadium always cool?
<br><br> A: It is full of fans`,
    `Q: Why did Santa go to music school?
<br><br> A: So he could improve his wrapping skills`,
    `Q: Why couldn’t the pirate learn the
alphabet?
<br><br> A: Because he was always lost at C`,
    `Q: What did the man say when he walked
into a bar?
<br><br> A: Ouch!`,
    `Q: What are the strongest days of the week?
<br><br> A: Saturday and Sunday. Every other day is
a weekday`,
    `Q: What goes tick-tock and woof-woof?
<br><br> A: A watchdog`,
    `Q: What do you call a monkey that loves
potato chips?
<br><br> A: A chipmonk`,
    `Q: What did the girl ocean say to the boy
ocean when he asked her out on a date?
<br><br> A: Shore`,
    `Q: Why do shoemakers go to heaven?
<br><br> A: Because the have good soles`,
    `Q: What did one plate say to another plate?
<br><br> A: Dinner is on me`,
    `Q: Why did they bury the battery?
<br><br> A: Because it was dead.`,
    `Q: What time is it when an elephant sits on
your fence?
<br><br> A: Time to get a new fence`,
    `Q: Why don’t dinosaurs eat clowns?
<br><br> A: Because they taste funny`,
    `Q: Why did the girl throw a stick of butter?
<br><br> A: She wanted to see a butter fly`,
    `Q: What did the finger say to thumb?
<br><br> A: I’m in glove with you`,
    `Q: What has only one eye, but still can’t
see?
<br><br> A: A needle`,
    `Q: Why did the boy bring a ladder to school?
<br><br> A: He wanted to go to high school.`,
    `Q: What do you call a cow with three legs?
<br><br> A: Lean beef`,
    `Q: Want me to tell you a joke about pizza?
<br><br> A: Sorry, it is too cheesy.`,
    `Q: Why was the broom late?
<br><br> A: It overswept.`,
    `Q: Why did the golfer wear two pairs of
pants?
<br><br> A: In case he got a hole in one.`,
    `Q: Why did Mozart sell his chickens?
<br><br> A: They kept saying, “Bach, Bach, Bach.”`,
    `Q: What word starts with E and has only one
letter in it?
<br><br> A: Envelope.`,
    `Q: Why is dark spelled with a K and not a C?
<br><br> A: Because you can’t see in the dark.`,
    `Q: How many tickles does it take to make an
octopus laugh?
<br><br> A: Ten tickles`,
    `Q: Why did the kid throw the clock out the
window?
<br><br> A: He wanted to see time fly.`,
    `Q: Why did the banana go to the doctor?
<br><br> A: It wasn’t peeling well.`,
    `Q: What kind of tree can fit into your hand?
<br><br> A: A palm tree!`,
    `Q: How can you tell that a tree is a dogwood
tree?
<br><br> A: By its bark!`,
    `Q: What do you call a bear with no teeth?
<br><br> A: A Gummy Bear`,
    `Q: Why did the skeleton go to the dance
alone?
<br><br> A: He had no body to go with him!`,
    `Q: Why did the students eat their homework?
<br><br> A: Because the teacher told them that it was
a piece of cake.`,
    `Q: What did the stamp say to the envelope?
<br><br> A: Stick with me, and we will go places!`,
    `Q: Why wouldn’t the teacher bring the class
to the pumpkin patch?
<br><br> A: It was in a seedy part of town.`,
    `Q: What’s another name for a clever duck?
<br><br> A: Wise Quacker!`,
    `Q: Why did the man run around his bed?
<br><br> A: To catch up on his sleep.`,

    `Q: Why didn’t the baby skeleton cross the
road alone?
<br><br> A: Because his mummy was not there!`,
    `Q. What do you call a cow with no legs?
A. Ground beef.`,
    `Q: What did the buffalo say to his kid when
he dropped him off for school?
<br><br> A: Bison.`,
    `Q: What nails do carpenters hate
hammering?
<br><br> A: Fingernails`,
    `Q: Why do seagulls fly over the sea?
<br><br> A: Because if they flew over the bay they’d
be bagels.`,
    `Q: What do you call a pig that knows karate?
<br><br> A: a pork chop!`,
    `Q: Why are ghosts bad liars?
<br><br> A: Because you can see right through them!`,
    `Q: What animal needs to wear a wig?
<br><br> A: a bald eagle!`,
    `Q: How do all the oceans say hello to each
other?
<br><br> A: They wave!`,
    `Q: What did one wall say to the other wall?
<br><br> A: I’ll meet you at the corner!`,
    `Q: What do you call an alligator in a vest?
<br><br> A: An investigator!`,
    `Q: What do you get when you cross a
snowman with a vampire
<br><br> A: Frostbite!`,
    `Q: What do you call a sleeping bull?
<br><br> A: A bulldozer!`,
    `Q: What can you catch but not throw?
<br><br> A: A cold!`,
    `Q: What has hands but can’t clap?
<br><br> A: A clock!`,
    `Q: What do you call a dog that can tell time?
<br><br> A: A watch dog!`,
    `Q: What falls in winter but never gets hurt?
<br><br> A: The snow!`,
    `Q: Why did the teacher put on sunglasses?
<br><br> A: Because her students were so bright!`,
    `Q: How did Benjamin Franklin feel when he
discovered electricity?
<br><br> A: Shocked!`,
    `Q: What do you call a flower that runs on
electricity?
<br><br> A: A power plant!`,
    `Q: Why couldn’t the pony sing in the choir?
<br><br> A: Because she was a little horse!`,
    `Q: Why did the cookie go to the nurse?
<br><br> A: Because he felt crummy!`,
    `Q: How do you keep a bull from charging?
<br><br> A: Take away its credit card!`,
    `Q: What is the witch’s favorite school
subject?
<br><br> A: Spelling!`,
    `Q: What has a ton of ears but can’t hear a
thing?
<br><br> A: A corn field.`,
    `Q: What goes up and down but does not
move?
<br><br> A: Stairs`,
    `Q: What did the traffic light say to the car?
<br><br> A: Don’t peek – I’m changing!`,
    `Q: Why did the dinosaur cross the road?
<br><br> A: It was the chicken’s day off`,
]
document.getElementById('jokeSection').innerHTML = joke_array[0];

let newJoke = () => {
    let randomNum = Math.floor(Math.random() * (joke_array.length - 1)) + 1;
    document.getElementById('jokeSection').innerHTML = joke_array[randomNum];
}
let styling = document.getElementById('jokeSection');
styling.style.font = "20px bold";
styling.style.position = "relative";
styling.style.top = "35px";
styling.style.right = "35px";
styling.style.fontFamily = "sans-serif"
styling.style.color = "white";
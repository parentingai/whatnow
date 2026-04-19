export interface Activity {
  id: number;
  text: string;
  emoji: string;
  label: string; // 2-3 word short label for wheel
  category: 'indoor-low' | 'indoor-creative' | 'outdoor' | 'educational' | 'quick' | 'onthego';
  time: '10min' | '30min' | 'longer';
  mode: 'home' | 'out' | 'onthego';
  place: 'indoor' | 'backyard' | 'park' | 'neighborhood' | 'dining' | 'transit' | 'shopping';
  energy: 'chill' | 'active';
}

export const activities: Activity[] = [
  // Indoor - Low Effort
  { id: 1, emoji: "🏰", label: "Pillow Fort", text: "Build a pillow fort and read a story inside", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 2, emoji: "🧸", label: "Tea Party", text: "Have a stuffed animal tea party", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 3, emoji: "🌋", label: "Floor is Lava", text: "Play 'the floor is lava' around the living room", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 4, emoji: "🗼", label: "Tower Build", text: "Build the tallest tower you can with blocks or cups", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 5, emoji: "💃", label: "Dance Party", text: "Have a dance party to 3 favorite songs", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 6, emoji: "🙈", label: "Hide & Seek", text: "Play hide and seek around the house", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 7, emoji: "🦸", label: "Superheroes", text: "Make a blanket cape and be superheroes", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 8, emoji: "🗂️", label: "Sort Toys", text: "Sort toys by color, size, or type", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 9, emoji: "🗣️", label: "Simon Says", text: "Play 'Simon Says' together", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 10, emoji: "🎳", label: "Bowling", text: "Set up a bowling alley with water bottles and a ball", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 11, emoji: "🔦", label: "Shadows", text: "Make shadow puppets with a flashlight", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 12, emoji: "👜", label: "Mystery Bag", text: "Play 'What's in the bag?' — guess objects by touch", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },

  // Indoor - Creative
  { id: 13, emoji: "🦕", label: "Dino Draw", text: "Draw a dinosaur and make up a story about it", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 14, emoji: "✈️", label: "Paper Planes", text: "Make a paper airplane fleet and see which flies farthest", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 15, emoji: "📰", label: "Comic Strip", text: "Create a comic strip about your family", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 16, emoji: "👑", label: "Paper Crown", text: "Make a crown out of paper and decorate it", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 17, emoji: "🗺️", label: "Treasure Map", text: "Draw a map of an imaginary treasure island", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 18, emoji: "📦", label: "Box Build", text: "Make a cardboard box car, spaceship, or house", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 19, emoji: "👆", label: "Finger Paint", text: "Finger paint a picture using only 3 colors", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 20, emoji: "🎢", label: "Marble Run", text: "Build a marble run with toilet paper rolls", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 21, emoji: "📿", label: "Bracelets", text: "Make friendship bracelets from string or yarn", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 22, emoji: "🧦", label: "Puppet Show", text: "Create a puppet show with socks", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 23, emoji: "🪨", label: "Rock Art", text: "Decorate rocks with markers or paint", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 24, emoji: "✂️", label: "Collage", text: "Make a collage from old magazines", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 25, emoji: "🎲", label: "Board Game", text: "Design your own board game on paper", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 26, emoji: "🛖", label: "Box Fort", text: "Build a fort out of cardboard boxes", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 27, emoji: "🎭", label: "Mask Make", text: "Make a mask from a paper plate", category: 'indoor-creative', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 28, emoji: "🌧️", label: "Rain Stick", text: "Create a rain stick from a paper towel roll and rice", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },

  // Outdoor
  { id: 29, emoji: "🍂", label: "Leaf Hunt", text: "Go outside and find 5 different leaves", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'active' },
  { id: 30, emoji: "🏃", label: "Race!", text: "Have a race — who can run to the tree and back fastest?", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'active' },
  { id: 31, emoji: "🥏", label: "Play Catch", text: "Play catch with a ball or frisbee", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'active' },
  { id: 32, emoji: "🐛", label: "Bug Hunt", text: "Go on a bug hunt and see how many you can spot", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'active' },
  { id: 33, emoji: "🖍️", label: "Chalk Art", text: "Draw with chalk on the sidewalk", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 34, emoji: "👀", label: "I Spy Walk", text: "Play 'I Spy' on a walk around the block", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 35, emoji: "🚧", label: "Obstacle Run", text: "Set up an obstacle course in the yard", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 36, emoji: "🫧", label: "Bubbles!", text: "Blow bubbles and try to catch them", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 37, emoji: "🧱", label: "Rock Tower", text: "Collect rocks and build a rock tower", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 38, emoji: "🥶", label: "Freeze Tag", text: "Play freeze tag", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'active' },
  { id: 39, emoji: "🔍", label: "Scavenger", text: "Go on a nature scavenger hunt", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'active' },
  { id: 40, emoji: "💦", label: "Puddles!", text: "Jump in puddles (if it rained!)", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 41, emoji: "💐", label: "Pick Flowers", text: "Pick flowers and make a bouquet", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 42, emoji: "🦶", label: "Hopscotch", text: "Play hopscotch", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 43, emoji: "🪁", label: "Fly a Kite", text: "Fly a kite (or make one from a plastic bag)", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'active' },
  { id: 44, emoji: "🌱", label: "Water Plants", text: "Water plants with a watering can", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 45, emoji: "⛏️", label: "Dig Treasure", text: "Dig for treasure in the sandbox", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 46, emoji: "🧺", label: "Picnic", text: "Have a picnic in the backyard", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 47, emoji: "🚦", label: "Red Light", text: "Play red light, green light", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'active' },
  { id: 48, emoji: "☁️", label: "Cloud Watch", text: "Watch clouds and find shapes", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'chill' },

  // Educational
  { id: 49, emoji: "🔵", label: "Color Count", text: "Count everything blue in the room", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 50, emoji: "✏️", label: "Fancy Name", text: "Practice writing your name in fancy letters", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 51, emoji: "🍪", label: "Bake Cookies", text: "Bake simple cookies together (counting + measuring)", category: 'educational', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 52, emoji: "🏪", label: "Play Store", text: "Play 'store' — price items and buy with pretend money", category: 'educational', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 53, emoji: "📖", label: "Act a Book", text: "Read a book and act out the characters", category: 'educational', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 54, emoji: "🌍", label: "New Words", text: "Learn 5 words in a new language", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 55, emoji: "🧪", label: "Science!", text: "Do a simple science experiment — mix baking soda and vinegar", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 56, emoji: "🪙", label: "Coin Sort", text: "Sort coins and count how much money you have", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 57, emoji: "🌤️", label: "Weather", text: "Make a weather chart and track the weather for a week", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 58, emoji: "❓", label: "20 Questions", text: "Play '20 Questions' about animals", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 59, emoji: "🔤", label: "Clay Letters", text: "Build letters of the alphabet out of playdough", category: 'educational', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 60, emoji: "🐦", label: "Bird Feeder", text: "Make a bird feeder from a pinecone and peanut butter", category: 'educational', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 61, emoji: "🪴", label: "Plant Seed", text: "Plant a seed in a cup and watch it grow", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 62, emoji: "🧭", label: "Find Home", text: "Look at a map and find where you live", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },

  // Quick
  { id: 63, emoji: "💪", label: "Mini Workout", text: "Do 10 jumping jacks, 10 squats, 10 spins", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 64, emoji: "✊", label: "Rock Paper", text: "Play rock-paper-scissors best of 10", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 65, emoji: "🤪", label: "Funny Faces", text: "Make funny faces in the mirror together", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 66, emoji: "🦩", label: "Balance!", text: "Do a 1-minute balance challenge — stand on one foot!", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 67, emoji: "👍", label: "Thumb War", text: "Thumb wrestling championship", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 68, emoji: "😂", label: "Silly Jokes", text: "Tell each other the silliest joke you know", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 69, emoji: "🪞", label: "Copycat", text: "Play 'copycat' — copy each other's moves", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 70, emoji: "👁️", label: "Stare Down", text: "Have a staring contest", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 71, emoji: "🤡", label: "Silly Pose", text: "See who can hold a silly pose the longest", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 72, emoji: "🤔", label: "Would You?", text: "Play 'would you rather' with silly choices", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 73, emoji: "🦀", label: "Animal Walk", text: "Do an animal walk race — crab walk, bear crawl, frog hop", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 74, emoji: "🌀", label: "Dizzy Spin", text: "Spin around 5 times and try to walk straight", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 75, emoji: "🦁", label: "Animal Sound", text: "Make the loudest animal sound you can", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 76, emoji: "👂", label: "Guess Sound", text: "Play 'guess the sound' with eyes closed", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 77, emoji: "🖐️", label: "High Fives", text: "High-five countdown from 10 — getting faster each time", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 78, emoji: "🗽", label: "Freeze Dance", text: "Play 'statue' — dance and freeze when music stops", category: 'quick', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },

  // More indoor
  { id: 79, emoji: "🚂", label: "Train Time", text: "Build a train track and play conductor", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 80, emoji: "🍽️", label: "Restaurant", text: "Have a pretend restaurant — take orders and serve food", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 81, emoji: "🩺", label: "Play Doctor", text: "Play doctor and give stuffed animals check-ups", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 82, emoji: "🥁", label: "Make a Band", text: "Make a band — use pots, spoons, and boxes as instruments", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 83, emoji: "👗", label: "Fashion Show", text: "Dress up in silly outfits and do a fashion show", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 84, emoji: "⛓️", label: "Paper Chain", text: "Make a paper chain as long as possible", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 85, emoji: "🔥", label: "Hot & Cold", text: "Play 'hot and cold' to find a hidden toy", category: 'indoor-low', time: '10min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 86, emoji: "⛵", label: "Paper Boat", text: "Make a paper boat and float it in the bathtub", category: 'indoor-creative', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },

  // More outdoor
  { id: 87, emoji: "🚲", label: "Bike Ride", text: "Go on a bike ride around the neighborhood", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 88, emoji: "💦", label: "Sprinklers!", text: "Splash in the sprinklers", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 89, emoji: "🏖️", label: "Sandcastle", text: "Build a sandcastle (or mud castle)", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 90, emoji: "🦵", label: "Wheelbarrow", text: "Have a wheelbarrow race", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 91, emoji: "🌈", label: "Color Hunt", text: "Go on a color scavenger hunt — find something for each color of the rainbow", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 92, emoji: "🚶", label: "Follow Me", text: "Play follow the leader on a walk", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'active' },

  // More educational
  { id: 93, emoji: "🟦", label: "Patterns", text: "Make a simple pattern with colored blocks and keep extending it", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 94, emoji: "🎤", label: "Rhyme Time", text: "Play rhyming games — find words that rhyme with 'cat'", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 95, emoji: "📏", label: "Measure It", text: "Measure things around the house with a ruler", category: 'educational', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 96, emoji: "⚗️", label: "Volcano!", text: "Make a volcano with clay, baking soda, and vinegar", category: 'educational', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },

  // More creative
  { id: 97, emoji: "🖼️", label: "Portraits", text: "Draw portraits of each other with crayons", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 98, emoji: "⏳", label: "Time Capsule", text: "Make a time capsule in a shoebox", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 99, emoji: "⭐", label: "DIY Stickers", text: "Create your own stickers with paper and tape", category: 'indoor-creative', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 100, emoji: "🦄", label: "Invent Animal", text: "Invent a new animal — draw it and name it", category: 'indoor-creative', time: '10min', mode: 'home', place: 'indoor', energy: 'chill' },

  // Outdoor longer + active
  { id: 101, emoji: "🥾", label: "Go Hiking", text: "Go on a hike and collect interesting things you find", category: 'outdoor', time: 'longer', mode: 'out', place: 'park', energy: 'active' },
  { id: 102, emoji: "🏅", label: "Field Day", text: "Set up a backyard field day — relay races, long jump, and sprints", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 103, emoji: "🏁", label: "Big Obstacle", text: "Build a big obstacle course in the yard and time each run", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 104, emoji: "🚵", label: "Bike Explore", text: "Go on a bike adventure to somewhere you've never been", category: 'outdoor', time: 'longer', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 105, emoji: "🚩", label: "Capture Flag", text: "Play capture the flag with neighborhood kids", category: 'outdoor', time: 'longer', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 106, emoji: "🎡", label: "Park Play", text: "Go to the park and play on every piece of equipment", category: 'outdoor', time: 'longer', mode: 'out', place: 'park', energy: 'active' },
  { id: 107, emoji: "🎊", label: "Water Fight", text: "Set up a water balloon battle", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 108, emoji: "⚽", label: "Kickball", text: "Play soccer or kickball in the yard", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'active' },

  // Outdoor longer + chill
  { id: 109, emoji: "📸", label: "Nature Walk", text: "Go on a slow nature walk and take photos of cool things", category: 'outdoor', time: 'longer', mode: 'out', place: 'park', energy: 'chill' },
  { id: 110, emoji: "🦅", label: "Bird Watch", text: "Set up a bird watching station with binoculars and a notebook", category: 'outdoor', time: 'longer', mode: 'out', place: 'park', energy: 'chill' },

  // Indoor longer + active
  { id: 111, emoji: "🪜", label: "Indoor Course", text: "Set up an indoor obstacle course with furniture and pillows", category: 'indoor-low', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 112, emoji: "🕺", label: "Dance-Off", text: "Have a dance-off tournament — best moves win", category: 'indoor-low', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },

  // More longer activities
  { id: 113, emoji: "🎟️", label: "Play Time", text: "Write and perform a short play together", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 114, emoji: "🥽", label: "Science Lab", text: "Do 3 kitchen science experiments (vinegar volcano, slime, etc.)", category: 'educational', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 115, emoji: "🗝️", label: "Treasure Hunt", text: "Set up a treasure hunt with clues around the house", category: 'indoor-low', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 116, emoji: "🎬", label: "Movie Make", text: "Film a short movie or stop-motion animation together", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 117, emoji: "🛏️", label: "Blanket City", text: "Build a whole blanket city with multiple rooms and tunnels", category: 'indoor-low', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 118, emoji: "👩‍🍳", label: "Chef Time", text: "Let your kid pick a recipe and cook a meal together", category: 'educational', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 119, emoji: "🎪", label: "Circus Show", text: "Practice silly tricks and put on a circus show", category: 'indoor-low', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 120, emoji: "🧶", label: "Craft Day", text: "Pick a big craft project — friendship bracelets, origami, or tie-dye", category: 'indoor-creative', time: 'longer', mode: 'home', place: 'indoor', energy: 'chill' },
  { id: 121, emoji: "🌻", label: "Garden Time", text: "Plant seeds in pots or a garden bed and decorate markers", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 122, emoji: "🏕️", label: "Camp Out", text: "Set up a tent in the backyard and pretend to camp", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 123, emoji: "🖌️", label: "Chalk Mural", text: "Cover the driveway in a giant chalk mural", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 124, emoji: "🐞", label: "Bug Safari", text: "Go on a bug safari — find, observe, and draw insects", category: 'outdoor', time: 'longer', mode: 'out', place: 'park', energy: 'chill' },
  { id: 125, emoji: "🏗️", label: "Sand Build", text: "Build an epic sandcastle or dirt construction site", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 126, emoji: "🛹", label: "Skate Learn", text: "Practice skateboarding, scootering, or rollerblading", category: 'outdoor', time: 'longer', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 127, emoji: "🤸", label: "Gymnastics", text: "Practice cartwheels, handstands, and tumbling on the grass", category: 'outdoor', time: 'longer', mode: 'out', place: 'park', energy: 'active' },
  { id: 128, emoji: "🎯", label: "Nerf War", text: "Set up a Nerf battle arena with cardboard barricades", category: 'indoor-low', time: 'longer', mode: 'home', place: 'indoor', energy: 'active' },

  // Fill thin cells — 30min indoor active
  { id: 129, emoji: "🎈", label: "Balloon Up", text: "Keep a balloon off the floor for as long as you can", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 130, emoji: "🪶", label: "Pillow War", text: "Have a pillow fight tournament — soft hits only!", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 131, emoji: "🧺", label: "Sock Toss", text: "Roll up socks and toss them into a laundry basket", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 132, emoji: "🍾", label: "Hall Bowling", text: "Set up water bottles in the hallway and bowl them down", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 133, emoji: "🧘", label: "Silly Yoga", text: "Try 5 silly yoga poses together and hold each one", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 134, emoji: "🛤️", label: "Tape Maze", text: "Lay tape paths on the floor and race through without stepping off", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },
  { id: 135, emoji: "🏀", label: "Room Soccer", text: "Play mini soccer with a rolled-up sock as the ball", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'active' },

  // Fill thin cells — 30min outdoor chill
  { id: 136, emoji: "🌿", label: "Leaf Collage", text: "Collect leaves and arrange them by color and size", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 137, emoji: "🎨", label: "Stone Paint", text: "Paint rocks you find outside with watercolors", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 138, emoji: "💮", label: "Nature Mandala", text: "Make a mandala on the ground from leaves, sticks, and petals", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 139, emoji: "📚", label: "Shade Read", text: "Read a picture book together under a tree", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 140, emoji: "🦋", label: "Butterfly Wait", text: "Sit quietly and see if a butterfly or bug will land near you", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },

  // Puzzle activity
  { id: 145, emoji: "🧩", label: "Do Puzzle", text: "Put together a jigsaw puzzle", category: 'indoor-low', time: '30min', mode: 'home', place: 'indoor', energy: 'chill' },

  // Fill thin cells — 10min outdoor chill
  { id: 141, emoji: "🌼", label: "Dandelions", text: "Find dandelion puffs and blow the seeds into the air", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 142, emoji: "🌬️", label: "Wind Feel", text: "Close your eyes and feel the wind — guess its direction", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 143, emoji: "🌾", label: "Grass Listen", text: "Sit in the grass and name 5 things you hear", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 144, emoji: "🌸", label: "Count Petals", text: "Pick a flower and count its petals together", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },

  // Park/Playground
  { id: 146, emoji: "🛝", label: "Swing Contest", text: "See who can swing the highest — count to 10 and let go!", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'active' },
  { id: 147, emoji: "🐿️", label: "Spot Wildlife", text: "See how many animals or birds you can spot in the park — squirrels count!", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 148, emoji: "🌳", label: "Tree Hug", text: "Find the biggest tree in the park and give it a hug — can you reach around?", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 149, emoji: "⛳", label: "Frisbee Golf", text: "Set up 5 targets (trees, benches) and see how few throws it takes to hit each one", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'active' },
  { id: 150, emoji: "🍁", label: "Leaf Pile Jump", text: "Rake up a pile of leaves and jump in over and over", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'active' },
  { id: 151, emoji: "🪵", label: "Stick Sculptures", text: "Collect sticks and build an animal or house on the ground", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 152, emoji: "🌰", label: "Pinecone Hunt", text: "Find as many pinecones as you can and build a pile — who found the biggest?", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 153, emoji: "🏆", label: "Playground Olympics", text: "Invent 5 events using the playground — fastest slide, most swings in 30 sec, etc.", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'active' },
  { id: 154, emoji: "🦆", label: "Feed the Ducks", text: "Bring some seed and find a pond or stream to feed the ducks or birds", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 155, emoji: "👃", label: "Smell Walk", text: "Find 5 things with a smell — flowers, grass, bark, mud, leaves", category: 'outdoor', time: '30min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 156, emoji: "☀️", label: "Sundial", text: "Make a sundial with a stick in the ground — mark the shadow and come back in 30 min", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },

  // Backyard
  { id: 157, emoji: "💧", label: "Water Relay", text: "Fill a cup at the hose and race to pour it into a bucket without spilling — first to fill wins", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 158, emoji: "🪣", label: "Car Wash", text: "Wash bikes, scooters, or outdoor toys with a bucket and sponge", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 159, emoji: "🪱", label: "Worm Hunt", text: "Dig in the soil after rain and see how many worms you can find — then put them back!", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 160, emoji: "🏹", label: "Target Practice", text: "Hang a hula hoop or draw a circle, throw balls or beanbags through it", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 161, emoji: "🌷", label: "Grow Something", text: "Plant a seed in a pot on the porch — water it and check on it every day", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 162, emoji: "🧴", label: "Giant Bubbles", text: "Make giant bubble wand from wire and mix dish soap + water + a little glycerin", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 163, emoji: "🏕️", label: "Backyard Lunch", text: "Eat lunch outside on a blanket — bonus: make sandwiches together first", category: 'outdoor', time: 'longer', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 164, emoji: "🎵", label: "Outdoor Concert", text: "Set up an outdoor stage and perform a show for the neighbors or stuffed animals", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 165, emoji: "🌧️", label: "Mud Kitchen", text: "Mix dirt and water to make 'mud pies', 'soup', and 'cakes' in old cups", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 166, emoji: "🏋️", label: "Yard Bootcamp", text: "Invent 5 backyard exercises — bear crawl to the fence, frog jump across the yard, etc.", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'active' },

  // Neighborhood
  { id: 167, emoji: "🐕", label: "Dog Count", text: "Go for a walk and count how many dogs you see — bonus point for each you can pet", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'chill' },
  { id: 168, emoji: "🅰️", label: "Alphabet Walk", text: "Find something that starts with every letter of the alphabet on your walk", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'chill' },
  { id: 169, emoji: "🛣️", label: "Sidewalk Gallery", text: "Chalk a whole sidewalk square gallery — each person draws 3 things", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'chill' },
  { id: 170, emoji: "📋", label: "House Bingo", text: "Make a list of things to spot — red door, garden gnome, mailbox flag, basketball hoop", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'chill' },
  { id: 171, emoji: "🛴", label: "Scooter Slalom", text: "Set up cones or chalk marks on the driveway and race around them on scooters or bikes", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 172, emoji: "💎", label: "Lucky Rock", text: "Find the most interesting rock on your walk, paint it at home, and hide it for someone to find", category: 'outdoor', time: '10min', mode: 'out', place: 'neighborhood', energy: 'chill' },
  { id: 173, emoji: "🚶", label: "Backwards Walk", text: "Walk around the block backwards — see if you can make it without peeking!", category: 'outdoor', time: '10min', mode: 'out', place: 'neighborhood', energy: 'active' },
  { id: 174, emoji: "🟥", label: "Rainbow Hunt", text: "Walk until you've found something in every color of the rainbow", category: 'outdoor', time: '30min', mode: 'out', place: 'neighborhood', energy: 'chill' },

  // Anywhere (outdoor)
  { id: 175, emoji: "👣", label: "Shadow Tag", text: "Tag each other's shadows by stepping on them — no body contact!", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },
  { id: 176, emoji: "🧚", label: "Fairy House", text: "Build a tiny fairy house from sticks, leaves, moss, and acorns", category: 'outdoor', time: '30min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 177, emoji: "🎵", label: "Bird Calls", text: "Listen for a bird, then try to copy its call — see if it calls back!", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 178, emoji: "🔬", label: "Micro Explorer", text: "Get very close to the ground and see what tiny things live down there — ants, seeds, moss", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 179, emoji: "☯️", label: "Outdoor Yoga", text: "Do 5 yoga poses outside — tree pose is better when you're near actual trees!", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'chill' },
  { id: 180, emoji: "🧵", label: "Nature Bracelet", text: "Wrap tape inside-out around your wrist and stick flowers, leaves, and seeds to it", category: 'outdoor', time: '10min', mode: 'out', place: 'park', energy: 'chill' },
  { id: 181, emoji: "🎲", label: "Nature Dice", text: "Pick 6 nature challenges (jump over sticks, spin around, touch grass, etc.) and roll a pinecone to decide", category: 'outdoor', time: '10min', mode: 'home', place: 'backyard', energy: 'active' },

  // ===== On the go — Dining =====
  { id: 182, emoji: "🍽️", label: "Napkin Origami", text: "Fold the napkin into an animal — bunny ears, swan, or paper fan", category: 'onthego', time: '30min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 183, emoji: "⭕", label: "Napkin Tic-Tac-Toe", text: "Draw a grid on a napkin and play tic-tac-toe while you wait", category: 'onthego', time: '10min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 184, emoji: "👓", label: "Table I Spy", text: "'I spy something...' — only things visible from your seat count!", category: 'onthego', time: '10min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 185, emoji: "🤔", label: "Would You Rather", text: "Take turns asking silly 'would you rather' questions", category: 'onthego', time: '30min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 186, emoji: "📖", label: "Story Chain", text: "Build a story one sentence at a time, each person adding the next line", category: 'onthego', time: '30min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 187, emoji: "🔢", label: "Count It", text: "Count something in the room — people in red, ceiling tiles, forks on tables", category: 'onthego', time: '10min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 188, emoji: "🤝", label: "Hand Clap Game", text: "Play a hand-clapping game — patty-cake, Miss Mary Mack, or Down Down Baby", category: 'onthego', time: '30min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 189, emoji: "✊", label: "Rock Paper Scissors", text: "Best of 5 — winner picks the next game", category: 'onthego', time: '10min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 190, emoji: "🥤", label: "Straw Shapes", text: "Build shapes, letters, or a tower using the straws and wrappers on the table", category: 'onthego', time: '10min', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 191, emoji: "🍬", label: "Sweet Letters", text: "Spell your name with sugar packets or sweetener — first one to finish wins", category: 'onthego', time: '10min', mode: 'onthego', place: 'dining', energy: 'chill' },

  // ===== On the go — Transit =====
  { id: 192, emoji: "🚗", label: "License Plate Hunt", text: "Find a license plate from as many different states (or countries) as you can", category: 'onthego', time: '30min', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 193, emoji: "🅰️", label: "Alphabet Signs", text: "Find every letter A–Z in order on signs, plates, or billboards along the way", category: 'onthego', time: 'longer', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 194, emoji: "🌈", label: "Rainbow Cars", text: "Spot a car of every color of the rainbow — red first, then orange, yellow, and so on", category: 'onthego', time: 'longer', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 195, emoji: "❓", label: "20 Questions", text: "Think of an animal, person, or object — others get 20 yes/no questions to guess it", category: 'onthego', time: '10min', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 196, emoji: "🎤", label: "Car Karaoke", text: "Take turns picking a song and singing along at the top of your lungs", category: 'onthego', time: '10min', mode: 'onthego', place: 'transit', energy: 'active' },
  { id: 197, emoji: "🐄", label: "Count Animals", text: "Count every cow, horse, dog, or bird you see — whoever has the most when you arrive wins", category: 'onthego', time: '30min', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 198, emoji: "🎼", label: "Hum That Tune", text: "One person hums a song — everyone else tries to guess the title", category: 'onthego', time: '10min', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 199, emoji: "🤫", label: "Silent Minute", text: "Who can stay completely silent the longest? No giggling allowed", category: 'onthego', time: '10min', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 200, emoji: "👁️", label: "Color Spot", text: "First person to spot 5 of the same color (red cars, blue signs, green trees) wins", category: 'onthego', time: '10min', mode: 'onthego', place: 'transit', energy: 'chill' },
  { id: 201, emoji: "💭", label: "Fortunately / Unfortunately", text: "Tell a story by alternating — 'Fortunately...' / 'Unfortunately...' — and see where it goes", category: 'onthego', time: '10min', mode: 'onthego', place: 'transit', energy: 'chill' },

  // ===== On the go — Shopping =====
  { id: 202, emoji: "🛒", label: "List Helper", text: "Kid holds the shopping list and checks off items as you find them", category: 'onthego', time: 'longer', mode: 'onthego', place: 'shopping', energy: 'active' },
  { id: 203, emoji: "🧮", label: "Count the Aisles", text: "Call out each aisle number as you pass — or count how many you visit today", category: 'onthego', time: '10min', mode: 'onthego', place: 'shopping', energy: 'chill' },
  { id: 204, emoji: "🟩", label: "Color of the Day", text: "Pick one color and spot every item you see in that color while shopping", category: 'onthego', time: '10min', mode: 'onthego', place: 'shopping', energy: 'chill' },
  { id: 205, emoji: "✅", label: "Scavenger Checklist", text: "Before you leave home, write down 5 specific items to spot — first to find them all wins", category: 'onthego', time: '30min', mode: 'onthego', place: 'shopping', energy: 'active' },
  { id: 206, emoji: "📐", label: "Tall or Short", text: "Pick two products and guess which is taller or weighs more — then check", category: 'onthego', time: '10min', mode: 'onthego', place: 'shopping', energy: 'chill' },
  { id: 207, emoji: "🔠", label: "Letter Spot", text: "Find a product starting with every letter in your name", category: 'onthego', time: '30min', mode: 'onthego', place: 'shopping', energy: 'chill' },
  { id: 208, emoji: "💰", label: "Price Guess", text: "Pick up a product and guess the price before looking — closest wins", category: 'onthego', time: '10min', mode: 'onthego', place: 'shopping', energy: 'chill' },
  { id: 209, emoji: "🎁", label: "One New Thing", text: "Pick one thing you've never tried before and see if you want to take it home", category: 'onthego', time: '30min', mode: 'onthego', place: 'shopping', energy: 'chill' },

  // Gap-fillers for thin place × time × energy combos
  { id: 210, emoji: "🎴", label: "Menu Design", text: "Design your own restaurant menu on napkins — appetizer, main, dessert, drinks", category: 'onthego', time: 'longer', mode: 'onthego', place: 'dining', energy: 'chill' },
  { id: 211, emoji: "🏃", label: "Aisle Sprint", text: "Send the kid to grab one specific item from a nearby aisle — race the clock", category: 'onthego', time: '10min', mode: 'onthego', place: 'shopping', energy: 'active' },
  { id: 212, emoji: "🌳", label: "Block Explorer", text: "Walk slowly and notice something new on every block — a door color, a garden, a cat", category: 'outdoor', time: 'longer', mode: 'out', place: 'neighborhood', energy: 'chill' },
  { id: 213, emoji: "🙌", label: "Seat Dance", text: "Play music and dance with just your arms and shoulders — car-seat disco", category: 'onthego', time: '30min', mode: 'onthego', place: 'transit', energy: 'active' },
];

export type TimeFilter = '10min' | '30min' | 'longer' | null;
export type ModeFilter = 'home' | 'out' | 'onthego' | null;
export type EnergyFilter = 'chill' | 'active' | null;
export type PlaceFilter = 'indoor' | 'backyard' | 'park' | 'neighborhood' | 'dining' | 'transit' | 'shopping' | null;

export function getFilteredActivities(
  time: TimeFilter,
  mode: ModeFilter,
  energy: EnergyFilter,
  place: PlaceFilter = null
): Activity[] {
  return activities.filter((activity) => {
    if (time && activity.time !== time) return false;
    if (mode && activity.mode !== mode) return false;
    if (energy && activity.energy !== energy) return false;
    if (place && activity.place !== place) return false;
    return true;
  });
}

export function getRandomActivities(
  pool: Activity[],
  count: number,
  exclude: number[] = []
): Activity[] {
  const available = pool.filter((a) => !exclude.includes(a.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export const spinCategories = [
  { label: 'Indoor', emoji: '🏠', filter: { location: 'indoor' as const } },
  { label: 'Outdoor', emoji: '🌳', filter: { location: 'outdoor' as const } },
  { label: 'Creative', emoji: '🎨', filter: { category: 'indoor-creative' as const } },
  { label: 'Quick', emoji: '⚡', filter: { category: 'quick' as const } },
  { label: 'Active', emoji: '🏃', filter: { energy: 'active' as const } },
  { label: 'Chill', emoji: '😌', filter: { energy: 'chill' as const } },
];

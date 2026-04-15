export interface Activity {
  id: number;
  text: string;
  emoji: string;
  label: string; // 2-3 word short label for wheel
  category: 'indoor-low' | 'indoor-creative' | 'outdoor' | 'educational' | 'quick';
  time: '10min' | '30min' | 'longer';
  location: 'indoor' | 'outdoor';
  energy: 'chill' | 'active';
}

export const activities: Activity[] = [
  // Indoor - Low Effort
  { id: 1, emoji: "🏰", label: "Pillow Fort", text: "Build a pillow fort and read a story inside", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 2, emoji: "🧸", label: "Tea Party", text: "Have a stuffed animal tea party", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 3, emoji: "🌋", label: "Floor is Lava", text: "Play 'the floor is lava' around the living room", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'active' },
  { id: 4, emoji: "🗼", label: "Tower Build", text: "Build the tallest tower you can with blocks or cups", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 5, emoji: "💃", label: "Dance Party", text: "Have a dance party to 3 favorite songs", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'active' },
  { id: 6, emoji: "🙈", label: "Hide & Seek", text: "Play hide and seek around the house", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'active' },
  { id: 7, emoji: "🦸", label: "Superheroes", text: "Make a blanket cape and be superheroes", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 8, emoji: "🗂️", label: "Sort Toys", text: "Sort toys by color, size, or type", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 9, emoji: "🗣️", label: "Simon Says", text: "Play 'Simon Says' together", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'active' },
  { id: 10, emoji: "🎳", label: "Bowling", text: "Set up a bowling alley with water bottles and a ball", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'active' },
  { id: 11, emoji: "🔦", label: "Shadows", text: "Make shadow puppets with a flashlight", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 12, emoji: "👜", label: "Mystery Bag", text: "Play 'What's in the bag?' — guess objects by touch", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'chill' },

  // Indoor - Creative
  { id: 13, emoji: "🦕", label: "Dino Draw", text: "Draw a dinosaur and make up a story about it", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 14, emoji: "✈️", label: "Paper Planes", text: "Make a paper airplane fleet and see which flies farthest", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 15, emoji: "📰", label: "Comic Strip", text: "Create a comic strip about your family", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 16, emoji: "👑", label: "Paper Crown", text: "Make a crown out of paper and decorate it", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 17, emoji: "🗺️", label: "Treasure Map", text: "Draw a map of an imaginary treasure island", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 18, emoji: "📦", label: "Box Build", text: "Make a cardboard box car, spaceship, or house", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 19, emoji: "🎨", label: "Finger Paint", text: "Finger paint a picture using only 3 colors", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 20, emoji: "🎢", label: "Marble Run", text: "Build a marble run with toilet paper rolls", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 21, emoji: "📿", label: "Bracelets", text: "Make friendship bracelets from string or yarn", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 22, emoji: "🧦", label: "Puppet Show", text: "Create a puppet show with socks", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 23, emoji: "🪨", label: "Rock Art", text: "Decorate rocks with markers or paint", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 24, emoji: "✂️", label: "Collage", text: "Make a collage from old magazines", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 25, emoji: "🎲", label: "Board Game", text: "Design your own board game on paper", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 26, emoji: "📦", label: "Box Fort", text: "Build a fort out of cardboard boxes", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'active' },
  { id: 27, emoji: "🎭", label: "Mask Make", text: "Make a mask from a paper plate", category: 'indoor-creative', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 28, emoji: "🌧️", label: "Rain Stick", text: "Create a rain stick from a paper towel roll and rice", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },

  // Outdoor
  { id: 29, emoji: "🍂", label: "Leaf Hunt", text: "Go outside and find 5 different leaves", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 30, emoji: "🏃", label: "Race!", text: "Have a race — who can run to the tree and back fastest?", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 31, emoji: "🥏", label: "Play Catch", text: "Play catch with a ball or frisbee", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 32, emoji: "🐛", label: "Bug Hunt", text: "Go on a bug hunt and see how many you can spot", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 33, emoji: "🖍️", label: "Chalk Art", text: "Draw with chalk on the sidewalk", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 34, emoji: "👀", label: "I Spy Walk", text: "Play 'I Spy' on a walk around the block", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 35, emoji: "🚧", label: "Obstacle Run", text: "Set up an obstacle course in the yard", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 36, emoji: "🫧", label: "Bubbles!", text: "Blow bubbles and try to catch them", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 37, emoji: "🪨", label: "Rock Tower", text: "Collect rocks and build a rock tower", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
  { id: 38, emoji: "🥶", label: "Freeze Tag", text: "Play freeze tag", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 39, emoji: "🔍", label: "Scavenger", text: "Go on a nature scavenger hunt", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 40, emoji: "💦", label: "Puddles!", text: "Jump in puddles (if it rained!)", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 41, emoji: "💐", label: "Pick Flowers", text: "Pick flowers and make a bouquet", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
  { id: 42, emoji: "🦶", label: "Hopscotch", text: "Play hopscotch", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 43, emoji: "🪁", label: "Fly a Kite", text: "Fly a kite (or make one from a plastic bag)", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 44, emoji: "🌱", label: "Water Plants", text: "Water plants with a watering can", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
  { id: 45, emoji: "⛏️", label: "Dig Treasure", text: "Dig for treasure in the sandbox", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 46, emoji: "🧺", label: "Picnic", text: "Have a picnic in the backyard", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },
  { id: 47, emoji: "🚦", label: "Red Light", text: "Play red light, green light", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 48, emoji: "☁️", label: "Cloud Watch", text: "Watch clouds and find shapes", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },

  // Educational
  { id: 49, emoji: "🔵", label: "Color Count", text: "Count everything blue in the room", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 50, emoji: "✏️", label: "Fancy Name", text: "Practice writing your name in fancy letters", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 51, emoji: "🍪", label: "Bake Cookies", text: "Bake simple cookies together (counting + measuring)", category: 'educational', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 52, emoji: "🏪", label: "Play Store", text: "Play 'store' — price items and buy with pretend money", category: 'educational', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 53, emoji: "📖", label: "Act a Book", text: "Read a book and act out the characters", category: 'educational', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 54, emoji: "🌍", label: "New Words", text: "Learn 5 words in a new language", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 55, emoji: "🧪", label: "Science!", text: "Do a simple science experiment — mix baking soda and vinegar", category: 'educational', time: '10min', location: 'indoor', energy: 'active' },
  { id: 56, emoji: "🪙", label: "Coin Sort", text: "Sort coins and count how much money you have", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 57, emoji: "🌤️", label: "Weather", text: "Make a weather chart and track the weather for a week", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 58, emoji: "❓", label: "20 Questions", text: "Play '20 Questions' about animals", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 59, emoji: "🔤", label: "Clay Letters", text: "Build letters of the alphabet out of playdough", category: 'educational', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 60, emoji: "🐦", label: "Bird Feeder", text: "Make a bird feeder from a pinecone and peanut butter", category: 'educational', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 61, emoji: "🌱", label: "Plant Seed", text: "Plant a seed in a cup and watch it grow", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 62, emoji: "🗺️", label: "Find Home", text: "Look at a map and find where you live", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },

  // Quick
  { id: 63, emoji: "🤸", label: "Mini Workout", text: "Do 10 jumping jacks, 10 squats, 10 spins", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 64, emoji: "✊", label: "Rock Paper", text: "Play rock-paper-scissors best of 10", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 65, emoji: "🤪", label: "Funny Faces", text: "Make funny faces in the mirror together", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 66, emoji: "🦩", label: "Balance!", text: "Do a 1-minute balance challenge — stand on one foot!", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 67, emoji: "👍", label: "Thumb War", text: "Thumb wrestling championship", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 68, emoji: "😂", label: "Silly Jokes", text: "Tell each other the silliest joke you know", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 69, emoji: "🪞", label: "Copycat", text: "Play 'copycat' — copy each other's moves", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 70, emoji: "👁️", label: "Stare Down", text: "Have a staring contest", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 71, emoji: "🤡", label: "Silly Pose", text: "See who can hold a silly pose the longest", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 72, emoji: "🤔", label: "Would You?", text: "Play 'would you rather' with silly choices", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 73, emoji: "🦀", label: "Animal Walk", text: "Do an animal walk race — crab walk, bear crawl, frog hop", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 74, emoji: "🌀", label: "Dizzy Spin", text: "Spin around 5 times and try to walk straight", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 75, emoji: "🦁", label: "Animal Sound", text: "Make the loudest animal sound you can", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 76, emoji: "👂", label: "Guess Sound", text: "Play 'guess the sound' with eyes closed", category: 'quick', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 77, emoji: "🖐️", label: "High Fives", text: "High-five countdown from 10 — getting faster each time", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },
  { id: 78, emoji: "🗽", label: "Freeze Dance", text: "Play 'statue' — dance and freeze when music stops", category: 'quick', time: '10min', location: 'indoor', energy: 'active' },

  // More indoor
  { id: 79, emoji: "🚂", label: "Train Time", text: "Build a train track and play conductor", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 80, emoji: "🍽️", label: "Restaurant", text: "Have a pretend restaurant — take orders and serve food", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 81, emoji: "🩺", label: "Play Doctor", text: "Play doctor and give stuffed animals check-ups", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 82, emoji: "🥁", label: "Make a Band", text: "Make a band — use pots, spoons, and boxes as instruments", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'active' },
  { id: 83, emoji: "👗", label: "Fashion Show", text: "Dress up in silly outfits and do a fashion show", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 84, emoji: "⛓️", label: "Paper Chain", text: "Make a paper chain as long as possible", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 85, emoji: "🔥", label: "Hot & Cold", text: "Play 'hot and cold' to find a hidden toy", category: 'indoor-low', time: '10min', location: 'indoor', energy: 'active' },
  { id: 86, emoji: "⛵", label: "Paper Boat", text: "Make a paper boat and float it in the bathtub", category: 'indoor-creative', time: '10min', location: 'indoor', energy: 'chill' },

  // More outdoor
  { id: 87, emoji: "🚲", label: "Bike Ride", text: "Go on a bike ride around the neighborhood", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 88, emoji: "💦", label: "Sprinklers!", text: "Splash in the sprinklers", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 89, emoji: "🏖️", label: "Sandcastle", text: "Build a sandcastle (or mud castle)", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 90, emoji: "🛒", label: "Wheelbarrow", text: "Have a wheelbarrow race", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'active' },
  { id: 91, emoji: "🌈", label: "Color Hunt", text: "Go on a color scavenger hunt — find something for each color of the rainbow", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },
  { id: 92, emoji: "🚶", label: "Follow Me", text: "Play follow the leader on a walk", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'active' },

  // More educational
  { id: 93, emoji: "🟦", label: "Patterns", text: "Make a simple pattern with colored blocks and keep extending it", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 94, emoji: "🎤", label: "Rhyme Time", text: "Play rhyming games — find words that rhyme with 'cat'", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 95, emoji: "📏", label: "Measure It", text: "Measure things around the house with a ruler", category: 'educational', time: '10min', location: 'indoor', energy: 'chill' },
  { id: 96, emoji: "🌋", label: "Volcano!", text: "Make a volcano with clay, baking soda, and vinegar", category: 'educational', time: '30min', location: 'indoor', energy: 'active' },

  // More creative
  { id: 97, emoji: "🖼️", label: "Portraits", text: "Draw portraits of each other with crayons", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 98, emoji: "📦", label: "Time Capsule", text: "Make a time capsule in a shoebox", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 99, emoji: "⭐", label: "DIY Stickers", text: "Create your own stickers with paper and tape", category: 'indoor-creative', time: '30min', location: 'indoor', energy: 'chill' },
  { id: 100, emoji: "🦄", label: "Invent Animal", text: "Invent a new animal — draw it and name it", category: 'indoor-creative', time: '10min', location: 'indoor', energy: 'chill' },

  // Outdoor longer + active
  { id: 101, emoji: "🥾", label: "Go Hiking", text: "Go on a hike and collect interesting things you find", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 102, emoji: "🏅", label: "Field Day", text: "Set up a backyard field day — relay races, long jump, and sprints", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 103, emoji: "🏁", label: "Big Obstacle", text: "Build a big obstacle course in the yard and time each run", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 104, emoji: "🚲", label: "Bike Explore", text: "Go on a bike adventure to somewhere you've never been", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 105, emoji: "🚩", label: "Capture Flag", text: "Play capture the flag with neighborhood kids", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 106, emoji: "🛝", label: "Park Play", text: "Go to the park and play on every piece of equipment", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 107, emoji: "🎈", label: "Water Fight", text: "Set up a water balloon battle", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 108, emoji: "⚽", label: "Kickball", text: "Play soccer or kickball in the yard", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },

  // Outdoor longer + chill
  { id: 109, emoji: "📸", label: "Nature Walk", text: "Go on a slow nature walk and take photos of cool things", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },
  { id: 110, emoji: "🦅", label: "Bird Watch", text: "Set up a bird watching station with binoculars and a notebook", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },

  // Indoor longer + active
  { id: 111, emoji: "🪜", label: "Indoor Course", text: "Set up an indoor obstacle course with furniture and pillows", category: 'indoor-low', time: 'longer', location: 'indoor', energy: 'active' },
  { id: 112, emoji: "🕺", label: "Dance-Off", text: "Have a dance-off tournament — best moves win", category: 'indoor-low', time: 'longer', location: 'indoor', energy: 'active' },

  // More longer activities
  { id: 113, emoji: "🎭", label: "Play Time", text: "Write and perform a short play together", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'active' },
  { id: 114, emoji: "🧪", label: "Science Lab", text: "Do 3 kitchen science experiments (vinegar volcano, slime, etc.)", category: 'educational', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 115, emoji: "🗺️", label: "Treasure Hunt", text: "Set up a treasure hunt with clues around the house", category: 'indoor-low', time: 'longer', location: 'indoor', energy: 'active' },
  { id: 116, emoji: "🎬", label: "Movie Make", text: "Film a short movie or stop-motion animation together", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 117, emoji: "🏰", label: "Blanket City", text: "Build a whole blanket city with multiple rooms and tunnels", category: 'indoor-low', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 118, emoji: "👩‍🍳", label: "Chef Time", text: "Let your kid pick a recipe and cook a meal together", category: 'educational', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 119, emoji: "🎪", label: "Circus Show", text: "Practice silly tricks and put on a circus show", category: 'indoor-low', time: 'longer', location: 'indoor', energy: 'active' },
  { id: 120, emoji: "🧶", label: "Craft Day", text: "Pick a big craft project — friendship bracelets, origami, or tie-dye", category: 'indoor-creative', time: 'longer', location: 'indoor', energy: 'chill' },
  { id: 121, emoji: "🌻", label: "Garden Time", text: "Plant seeds in pots or a garden bed and decorate markers", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },
  { id: 122, emoji: "🏕️", label: "Camp Out", text: "Set up a tent in the backyard and pretend to camp", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },
  { id: 123, emoji: "🎨", label: "Chalk Mural", text: "Cover the driveway in a giant chalk mural", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },
  { id: 124, emoji: "🐛", label: "Bug Safari", text: "Go on a bug safari — find, observe, and draw insects", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'chill' },
  { id: 125, emoji: "🏗️", label: "Sand Build", text: "Build an epic sandcastle or dirt construction site", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 126, emoji: "🛹", label: "Skate Learn", text: "Practice skateboarding, scootering, or rollerblading", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 127, emoji: "🤸", label: "Gymnastics", text: "Practice cartwheels, handstands, and tumbling on the grass", category: 'outdoor', time: 'longer', location: 'outdoor', energy: 'active' },
  { id: 128, emoji: "🎯", label: "Nerf War", text: "Set up a Nerf battle arena with cardboard barricades", category: 'indoor-low', time: 'longer', location: 'indoor', energy: 'active' },

  // Fill thin cells — 30min indoor active
  { id: 129, emoji: "🎈", label: "Balloon Up", text: "Keep a balloon off the floor for as long as you can", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 130, emoji: "🪶", label: "Pillow War", text: "Have a pillow fight tournament — soft hits only!", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 131, emoji: "🧺", label: "Sock Toss", text: "Roll up socks and toss them into a laundry basket", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 132, emoji: "🎳", label: "Hall Bowling", text: "Set up water bottles in the hallway and bowl them down", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 133, emoji: "🧘", label: "Silly Yoga", text: "Try 5 silly yoga poses together and hold each one", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 134, emoji: "🛤️", label: "Tape Maze", text: "Lay tape paths on the floor and race through without stepping off", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },
  { id: 135, emoji: "⚽", label: "Room Soccer", text: "Play mini soccer with a rolled-up sock as the ball", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'active' },

  // Fill thin cells — 30min outdoor chill
  { id: 136, emoji: "🌿", label: "Leaf Collage", text: "Collect leaves and arrange them by color and size", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 137, emoji: "🎨", label: "Stone Paint", text: "Paint rocks you find outside with watercolors", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 138, emoji: "💮", label: "Nature Mandala", text: "Make a mandala on the ground from leaves, sticks, and petals", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 139, emoji: "📚", label: "Shade Read", text: "Read a picture book together under a tree", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },
  { id: 140, emoji: "🦋", label: "Butterfly Wait", text: "Sit quietly and see if a butterfly or bug will land near you", category: 'outdoor', time: '30min', location: 'outdoor', energy: 'chill' },

  // Puzzle activity
  { id: 145, emoji: "🧩", label: "Do Puzzle", text: "Put together a jigsaw puzzle", category: 'indoor-low', time: '30min', location: 'indoor', energy: 'chill' },

  // Fill thin cells — 10min outdoor chill
  { id: 141, emoji: "🌼", label: "Dandelions", text: "Find dandelion puffs and blow the seeds into the air", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
  { id: 142, emoji: "🌬️", label: "Wind Feel", text: "Close your eyes and feel the wind — guess its direction", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
  { id: 143, emoji: "🌾", label: "Grass Listen", text: "Sit in the grass and name 5 things you hear", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
  { id: 144, emoji: "🌸", label: "Count Petals", text: "Pick a flower and count its petals together", category: 'outdoor', time: '10min', location: 'outdoor', energy: 'chill' },
];

export type TimeFilter = '10min' | '30min' | 'longer' | null;
export type LocationFilter = 'indoor' | 'outdoor' | null;
export type EnergyFilter = 'chill' | 'active' | null;

export function getFilteredActivities(
  time: TimeFilter,
  location: LocationFilter,
  energy: EnergyFilter
): Activity[] {
  return activities.filter((a) => {
    if (time && a.time !== time) return false;
    if (location && a.location !== location) return false;
    if (energy && a.energy !== energy) return false;
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

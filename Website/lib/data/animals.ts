// Real animal roster, sourced from the live site's "Sponsor our Animal
// Residents" page (sagemtn.org), saved 2026-08-18. See ../../../Animals/*.md
// at the project root for the original source files — keep this file and
// those markdown files in sync.
//
// `species` values double as the filter categories on /animals and the
// options in the sponsorship picker on /donate.
//
// `photoUrl` is only set for animals whose photo could be confidently
// matched by filename to their name in the source material — see
// ../../../Images/Appendix.md for the rest, which live in
// public/images/animals/unsorted/ pending manual review.

export type Species = "cow" | "pig" | "sheep" | "goat" | "turkey" | "chicken"

export interface Animal {
  slug: string
  name: string
  species: Species
  speciesLabel: string
  story: string
  personality: string
  sponsorable: boolean
  sponsorshipAmount?: string
  photoUrl?: string
}

export const speciesList: { id: Species; label: string }[] = [
  { id: "cow", label: "Cows" },
  { id: "pig", label: "Pigs" },
  { id: "sheep", label: "Sheep" },
  { id: "goat", label: "Goats" },
  { id: "turkey", label: "Turkeys" },
  { id: "chicken", label: "Chickens" },
]

export const animals: Animal[] = [
  // Cows
  {
    slug: "francis",
    name: "Francis",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "A surprise baby — we rescued his mom Reba, and six months later she gave birth, surprising us all. He's a bit shy, but he's starting to come out of his shell.",
    personality: "Enjoys hanging out with Star, giving everyone kisses, getting neck scratches, and playing every chance he gets.",
    sponsorable: true,
    sponsorshipAmount: "$60.00/month",
    photoUrl: "/images/animals/cow/francis.jpg",
  },
  {
    slug: "reba",
    name: "Reba",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Rescued after being put up for auction through the police department, who had corralled her days earlier after concerned residents reported an unidentified cow on the loose. We don't know her past, but we're grateful she'll live out her life here.",
    personality: "Found solace with the sanctuary's bovine residents and spends every moment grazing with them.",
    sponsorable: true,
    sponsorshipAmount: "$40.00/month",
    photoUrl: "/images/animals/cow/reba.jpg",
  },
  {
    slug: "star",
    name: "Star",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Rescued May 2, 2022 through a 4-H-type program in southern Utah, where a young teen was tasked with raising her before she'd eventually be auctioned off. Her caretaker had a different plan and sent her to sanctuary instead.",
    personality: "Enjoys neck scratches, laying in the sun, and cuddling with her closest human friends.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/cow/star.jpg",
  },
  {
    slug: "bradley",
    name: "Bradley",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Rescued from a youth program that raises animals for eventual auction. The kids raising Bradley had a change of heart and sent him to sanctuary instead.",
    personality: "Watches over his family here at Sage Mountain, enjoys being brushed, and likes scratching his butt on the fences.",
    sponsorable: true,
    sponsorshipAmount: "$60.00/month",
    photoUrl: "/images/animals/cow/bradley.jpg",
  },
  {
    slug: "smooch",
    name: "Smooch",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Rescued from a nearby farm by a neighbor who visited him regularly and formed a bond, then cared for him for two years before asking if we could take him in.",
    personality: "True to his name, loves giving kisses. Enjoys eating anything and everything, meeting new visitors, and napping in the sun.",
    sponsorable: true,
    sponsorshipAmount: "$40.00/month",
    photoUrl: "/images/animals/cow/smooch.jpg",
  },
  {
    slug: "dale",
    name: "Dale",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Found haltered and tied to a floorboard outside a chicken plant in Southern California, starving, sick, and covered in flies. A Jersey bull with no use to a dairy operation, he was rescued by Farm Sanctuary before transferring to Sage Mountain.",
    personality: "Loves exploring, drinking straight from the water hose, and saying hi to his human friends.",
    sponsorable: true,
    sponsorshipAmount: "$60.00/month",
    photoUrl: "/images/animals/cow/dale.jpg",
  },
  {
    slug: "benji",
    name: "Benji",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Rescued from a youth program that raises animals for auction. The student raising Benjamin couldn't bear to see him sent to slaughter and reached out for help.",
    personality: "Mischievous, expressive, and loves hanging out with Francis, Reba, and Star.",
    sponsorable: true,
    sponsorshipAmount: "$40.00/month",
    photoUrl: "/images/animals/cow/benji.jpg",
  },

  // Pigs
  {
    slug: "ralphy",
    name: "Ralphy",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Found wandering the streets of South Jordan, likely a former backyard pet pig. No one claimed him from animal control; after a stint fostering, we adopted him permanently.",
    personality: "The sweetest little boy — loves belly rubs, meeting new people, and falling asleep to volunteers singing him lullabies.",
    sponsorable: true,
    sponsorshipAmount: "$40.00/month",
    photoUrl: "/images/animals/pig/ralphy.jpg",
  },
  {
    slug: "pickles",
    name: "Pickles",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Born June 2, 2022 — one of four piglets born to Harriet just two months after we rescued her, a total surprise.",
    personality: "Loves playing and being mischievous, hanging out with River and going on adventures around the sanctuary.",
    sponsorable: true,
    sponsorshipAmount: "$40.00/month",
    photoUrl: "/images/animals/pig/pickles.jpg",
  },
  {
    slug: "harriet",
    name: "Harriet",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Came from a small Utah farm raising blonde-mangalitsa pigs for show, breeding, or meat. Found belly-deep in a muddy pool of feces when we rescued her; two months later she gave birth to four piglets.",
    personality: "The first to find you for belly rubs and the last to leave your side. Loves exploring the pasture and bathing in the wallow.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/pig/harriet-photo.jpg",
  },
  {
    slug: "amora",
    name: "Amora",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Born June 2, 2022 — one of four piglets born to Harriet just two months after we rescued her, a total surprise.",
    personality: "Enjoys long walks along the mountainside, snuggles from family and human friends, and playing in the dirt.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/pig/amora.jpg",
  },
  {
    slug: "francine",
    name: "Francine",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Born June 2, 2022 — one of four piglets born to Harriet just two months after we rescued her, a total surprise.",
    personality: "Loves playing in the mud, hanging out with her mama, and watching the sunset at night.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/pig/francine.jpg",
  },
  {
    slug: "river",
    name: "River",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Born June 2, 2022 — one of four piglets born to Harriet just two months after we rescued her, a total surprise.",
    personality: "Loves saying hi to volunteers and hanging out while they work, plus sitting in the water trough and getting belly rubs.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/pig/river.jpg",
  },
  {
    slug: "ponyboy",
    name: "Ponyboy",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Rescued by Farm Sanctuary in 2016 in Acton, CA, after animal control picked him up following his escape from a previous home. Once cleared for release, Farm Sanctuary transferred him to Sage Mountain.",
    personality: "Enjoys most things and is always wagging his tail — loves spending time with Wilma Jean and watching the sunset with her.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/pig/ponyboy.jpg",
  },
  {
    slug: "morgan",
    name: "Morgan",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Rescued in May 2020 after falling off a transport truck onto an interstate highway in Morgan, UT. Animal control took him in, and since no one claimed him, we were able to rescue him.",
    personality: "Enjoys taking long naps, getting shoulder pats, and expressing how he feels.",
    sponsorable: true,
    sponsorshipAmount: "$80.00/month",
    photoUrl: "/images/animals/pig/morgan.jpg",
  },

  // Sheep
  {
    slug: "jesse",
    name: "Jesse",
    species: "sheep",
    speciesLabel: "Sheep",
    story:
      "Found as a baby in Cedar City, Utah, after his ears had been bitten off by dogs. The woman who rescued him bottle-fed him at home until he was ready to come to Sage Mountain.",
    personality: "Greets guests every day, loves head scratches and napping in the sun.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/sheep/jesse.jpg",
  },
  {
    slug: "martin",
    name: "Martin",
    species: "sheep",
    speciesLabel: "Sheep",
    story:
      "Considered a \"bummer\" lamb the farmer had no interest in raising. The farmer chose to find him a new home instead, and that's how he came to live with us.",
    personality: "Very curious — enjoys just being in your presence, hanging out with his sheep family, and any and all treats he can get.",
    sponsorable: true,
    sponsorshipAmount: "$40.00/month",
    photoUrl: "/images/animals/sheep/martin.jpg",
  },
  {
    slug: "sammie",
    name: "Sammie",
    species: "sheep",
    speciesLabel: "Sheep",
    story:
      "Found high in the mountains, alone and very young, by a woman who snowshoed the area and returned daily to feed her through the winter, before she was brought down to her new forever home.",
    personality: "Very observant — enjoys hanging out with Martin and snacking on different plants.",
    sponsorable: true,
    sponsorshipAmount: "$20.00/month",
    photoUrl: "/images/animals/sheep/sammie.jpg",
  },
  {
    slug: "ava",
    name: "Ava",
    species: "sheep",
    speciesLabel: "Sheep",
    story:
      "Found abandoned with her brother Peter just four or five days after birth. Their caregivers bottle-fed them every few hours, and the babies became deeply attached to their new caregivers.",
    personality: "A very gentle soul — enjoys head scratches and the company of her sheep and human friends.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/sheep/ava.jpg",
  },
  {
    slug: "peter",
    name: "Peter",
    species: "sheep",
    speciesLabel: "Sheep",
    story:
      "Found abandoned with his sister Ava just four or five days after birth. Their caregivers bottle-fed them every few hours, and the babies became deeply attached to their new caregivers.",
    personality: "Sees himself as the protector of all the sheep here — also loves expressing how he feels and eating sweet grain.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/sheep/peter.jpg",
  },

  // Goats
  {
    slug: "jasper",
    name: "Jasper",
    species: "goat",
    speciesLabel: "Goat",
    story:
      "Originally rescued by Haven Hollow Animal Refuge when the goat farm he lived at asked them to take him in. When Haven Hollow later needed to rehome their residents, we were glad to take him in.",
    personality: "Very curious, loves being involved in everything, and shows love through kisses and soft nibbles.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/goat/jasper.jpg",
  },
  {
    slug: "pam",
    name: "Pam",
    species: "goat",
    speciesLabel: "Goat",
    story:
      "Raised as part of a child's 4-H program. After forming a bond, the family didn't want her sent to auction and asked us to take her in along with her friends Bruce and Kevin — an inseparable trio.",
    personality: "Enjoys watching the sunset, taking lots of naps, and stealing treats.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/goat/pam.jpg",
  },
  {
    slug: "bruce",
    name: "Bruce",
    species: "goat",
    speciesLabel: "Goat",
    story:
      "Raised as part of a child's 4-H program. After forming a bond, the family didn't want him sent to auction and asked us to take him in along with his friends Pam and Kevin — an inseparable trio.",
    personality: "The self-appointed boss of the other goats — enjoys scratches behind the horns and playing with Tahini.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/goat/bruce.jpg",
  },
  {
    slug: "louis",
    name: "Louis",
    species: "goat",
    speciesLabel: "Goat",
    story:
      "Came to Sage Mountain with his brother Lenny after their previous owner sold their house and planned to send them to a livestock auction. We got word in time to negotiate their release to sanctuary.",
    personality: "Loves hanging out with everyone who visits, leaning in for snuggles, and being the center of attention.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/goat/louis.jpg",
  },

  // Turkeys
  {
    slug: "moby",
    name: "Moby",
    species: "turkey",
    speciesLabel: "Turkey",
    story:
      "Rescued with the help of the nonprofit DxE (Direct Action Everywhere), who brought her and her sister Phoenix to safety from Sanpete County. She arrived timid and frightened, but slowly healed.",
    personality: "Now one of the most affectionate and welcoming turkeys — adores greeting visitors and seeking out connection.",
    sponsorable: true,
    sponsorshipAmount: "$20.00/month for 1 year",
    photoUrl: "/images/animals/turkey/moby.jpeg",
  },
  {
    slug: "brett",
    name: "Brett",
    species: "turkey",
    speciesLabel: "Turkey",
    story:
      "Abandoned in a canyon near Nephi — a place often used for target practice — just days after New Year's. A compassionate individual spotted and took him in.",
    personality: "Took on the role of protector for the other turkey hens; loves strutting around showing off his presence.",
    sponsorable: true,
    sponsorshipAmount: "$50.00/month",
    photoUrl: "/images/animals/turkey/brett.jpg",
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    species: "turkey",
    speciesLabel: "Turkey",
    story:
      "Rescued with the help of the nonprofit DxE (Direct Action Everywhere), who brought her and her sister Moby to safety from Sanpete County. She arrived cautious, but slowly learned this place was different.",
    personality: "A tender, affectionate presence — greets visitors sweetly and spends her days with her new family.",
    sponsorable: true,
    sponsorshipAmount: "$20.00/month for 1 year",
    photoUrl: "/images/animals/turkey/phoenix.jpeg",
  },
  {
    slug: "roxy",
    name: "Roxy",
    species: "turkey",
    speciesLabel: "Turkey",
    story:
      "Found as a stray in Salt Lake City and unclaimed at the shelter. Wasatch Wanderers fostered her, then brought her to Sage Mountain to be a friend for Brett.",
    personality: "The sweetest gal you'll meet — extremely social, loves to snuggle, and often falls asleep in laps. The alpha of the sanctuary's turkeys.",
    sponsorable: true,
    sponsorshipAmount: "$20.00/month for 1 year",
    photoUrl: "/images/animals/turkey/roxy.jpg",
  },

  // Chickens
  {
    slug: "jeff-goldblum",
    name: "Jeff Goldblum",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Found on the side of the road with his sister Ariana — two tiny lives with an unknown past, bruised and frightened. A compassionate foster gave both siblings the safety and time they needed to heal.",
    personality: "Bonded closely with his sister Ariana after their rescue.",
    sponsorable: true,
    sponsorshipAmount: "$10.00/month for 1 year",
    photoUrl: "/images/animals/chicken/jeff-goldblum-2.jpg",
  },
  {
    slug: "penelope",
    name: "Penelope",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Found as a stray and ended up at the animal shelter; after her stray hold was up unclaimed, we brought her home to Sage Mountain.",
    personality: "Was skittish on arrival but now spends her time with the other hens, cuddling Joey the rooster every night, and greeting volunteers.",
    sponsorable: true,
    sponsorshipAmount: "$15.00/month",
    photoUrl: "/images/animals/chicken/penelope.jpg",
  },
  {
    slug: "sally",
    name: "Sally",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Also goes by Squishy. Found as a stray and ended up at the shelter unclaimed. Wasatch Wanderers fostered her before we brought her to Sage Mountain.",
    personality: "Very comfortable with us from the start — Walter the rooster was quick to welcome and protect her.",
    sponsorable: true,
    sponsorshipAmount: "$15.00/month",
    photoUrl: "/images/animals/chicken/sally.jpg",
  },
  {
    slug: "steve",
    name: "Steve",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Originally kept as a pet hen with her sisters Piper and Stormy. When their caretakers had less time to care for them, they reached out so we could give the sisters a permanent home together.",
    personality: "Sweet — her caretakers thought she was a rooster when they named her, but she's a hen and kept the name.",
    sponsorable: true,
    sponsorshipAmount: "$15.00/month",
    photoUrl: "/images/animals/chicken/steve.jpg",
  },
  {
    slug: "piper",
    name: "Piper",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Originally kept as a pet hen with her sisters Stormy and Steve. When their caretakers had less time to care for them, they reached out so we could give the sisters a permanent home together.",
    personality: "Sweet and very observant — enjoys time with her sisters, playing and napping in the bushes.",
    sponsorable: true,
    sponsorshipAmount: "$15.00/month",
    photoUrl: "/images/animals/chicken/piper.jpg",
  },
  {
    slug: "walter",
    name: "Walter",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Found wandering a neighborhood and ended up unclaimed at animal control. A friend heard about him and picked him up after his stray hold, then reached out to us.",
    personality: "Fit right in with hen pals Ezekiel and Wednesday — loves protecting them. Won \"Best Hair at Sage Mountain Sanctuary\" this year.",
    sponsorable: true,
    sponsorshipAmount: "$15.00/month",
    photoUrl: "/images/animals/chicken/walter.jpg",
  },
  {
    slug: "delhi",
    name: "Delhi",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Named after the city. Found wandering a farm neighborhood by a friend with no owner ever identified; worried about her fate, he reached out to us.",
    personality: "Loves exploring the sanctuary with the other hens and Joey the rooster, and napping in the shade of the bushes.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/chicken/delhi.jpg",
  },
  {
    slug: "abigail",
    name: "Abigail",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Originally raised as a backyard hen. A coyote attack claimed the lives of the other hens, leaving Abigail the sole survivor. Her caretaker reached out so she could join a new chicken family.",
    personality: "Feisty — honed from defending her friends during the coyote attack — but friendly once at ease.",
    sponsorable: true,
    sponsorshipAmount: "$20.00/month",
    photoUrl: "/images/animals/chicken/abigail.jpg",
  },
  {
    slug: "rosaline",
    name: "Rosaline",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Came to us almost 3 years ago with her 3 sisters after their caretaker passed away. Her sisters have since passed, but she's doing well and became close with Penelope.",
    personality: "Enjoys time with Penelope, expressing herself with the cutest chirps, and relaxing near the other hens.",
    sponsorable: true,
    sponsorshipAmount: "$20.00/month",
    photoUrl: "/images/animals/chicken/rosaline.jpg",
  },
  {
    slug: "ariana-grande",
    name: "Ariana Grande",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Found on the side of the road with her brother Jeff — two tiny lives with an unknown past, bruised and frightened. A compassionate foster gave both siblings the safety and time they needed to heal.",
    personality: "Bonded closely with her brother Jeff after their rescue.",
    sponsorable: true,
    sponsorshipAmount: "$10.00/month",
    photoUrl: "/images/animals/chicken/ariana-grande-2.jpg",
  },
  {
    slug: "ezekiel",
    name: "Ezekiel",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Raised in a dog run in someone's backyard to be eaten. When the family's health concerns forced them to give up her and her six siblings, Wasatch Wanderers reached out and we had space to take them in.",
    personality: "Enjoys dust bathing, napping in the sun, and getting attention from volunteers.",
    sponsorable: true,
    sponsorshipAmount: "$30.00/month",
    photoUrl: "/images/animals/chicken/ezekiel.jpg",
  },
  {
    slug: "wednesday",
    name: "Wednesday",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Rescued from a backyard dog run where she was being raised to be eaten. After health issues forced her previous family to give her up, Wasatch Wanderers took her in and brought her to Sage Mountain. She's needed surgery for a severe foot infection and is recovering well.",
    personality: "Recovering and receiving the best care we can give her.",
    sponsorable: false,
    photoUrl: "/images/animals/chicken/wednesday.jpg",
  },
]

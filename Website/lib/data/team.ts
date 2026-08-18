// Real team roster, sourced from https://www.sagemtn.org/meet-the-team (fetched 2026-08-18).
// See ../../../Team Members/Appendix.md at the project root for the original source files.
// Photos aren't available yet, so the page falls back to initials avatars.

export interface TeamMember {
  name: string
  role: string
  initials: string
  bio: string[]
}

export const team: TeamMember[] = [
  {
    name: "David Swartz",
    role: "Co-Founder",
    initials: "DS",
    bio: [
      "David's journey into animal advocacy began in 1999, after a pivotal conversation with a friend about the realities of animals in our food system. Reluctantly, he read a story about animal agriculture, and within just five minutes, he made a life-changing decision—he would never eat meat again. This moment sparked the foundation for what would become Sage Mountain.",
      "In the summer of 2002, while visiting Northern California, David had the opportunity to tour a farm animal sanctuary. There, he witnessed pigs and other animals living in a beautiful, respectful environment, treated with the dignity they deserved. It was in that moment that David realized creating a sanctuary for farm animals was his true calling in life.",
      "In addition to his commitment to ethical living, David values spending time outdoors and enjoys the natural beauty of Park City. Whether it's mountain biking or backcountry skiing in the nearby mountains, participating in community events, or simply enjoying the peace and serenity of the sanctuary, David leads a life deeply connected to nature and the environment. His personal values reflect his dedication to sustainability, animal welfare, and conscious living.",
    ],
  },
  {
    name: "Lauren Lockey",
    role: "Co-Founder",
    initials: "LL",
    bio: [
      "Growing up, I always had a deep love for animals, but like many people, I didn't fully realize the disconnect between the animals we cherish as companions and those raised for food. At age eleven, I began questioning why my dog's life holds more value than a cow's life. As time went on, I realized every life holds value especially to the one living it. I then decided I wanted to do my best to be a voice for animals. I joined my first animal rights group at age 12 and once I made the connection, I never turned back!",
      "I co-founded Sage Mountain Sanctuary with the dream of creating a safe haven for rescued farm animals—animals who, like all beings, deserve to live free from harm. But beyond rescue, our mission is about education and compassion. Every animal here has a story, and through their stories, we hope to inspire people to see them as individuals, each with their own personalities, emotions, and desire to live.",
      "As a speaker and advocate, I share not only my journey but also the stories of these incredible animals—beings who have overcome adversity and now serve as ambassadors for their kind. Through my work at the sanctuary and beyond, I aim to bridge the gap between people and the animals most often forgotten, showing that kindness is always a choice. And when we choose kindness and become allies for the most vulnerable, we become better versions of ourselves.",
      "Whether you visit Sage Mountain Sanctuary, hear me speak, join my yoga and wellness sessions, or simply follow our journey, I hope our work inspires you to make choices that align with our deep values of compassion. Because together, we can create a world where all animals are valued and protected.",
    ],
  },
  {
    name: "Alyssa Poulsen",
    role: "Animal Care Manager",
    initials: "AP",
    bio: [
      'From an early age, Alyssa felt a deep connection to animals. Growing up with dogs and iguanas, she always knew animals were special. However, meeting farmed animals in person transformed her understanding of their experiences. She describes looking into their eyes and sensing "the pain they\'ve been through, their resilience, and above all, their desire to live and be loved."',
      'Though art and music were once her greatest passions, Alyssa\'s deepest commitment now centers on the animals at Sage Mountain. She finds profound meaning in witnessing their healing and being part of a sanctuary where they are "finally safe, seen, and free to just be." She emphasizes that each animal possesses a unique personality.',
      'Alyssa values that Sage Mountain offers mutual healing for both animals and people. She describes leaving with "a deeper sense of connection, greater compassion, and a renewed awareness of what truly matters." She expresses gratitude for being part of a community centered on "love, respect, and second chances."',
    ],
  },
  {
    name: "Alec Brush",
    role: "Animal Care Manager",
    initials: "AB",
    bio: [
      "Alec's journey into animal advocacy began during college, initially driven by environmental activism. After working with the Utah Conservation Corps on land conservation, he adopted a plant-based diet for water conservation. A friend introduced him to Sage Mountain, where he began volunteering regularly. \"I immediately connected with the animals,\" he recalls, noting he had never considered how farmed animals lived compared to his childhood pets. Recognizing farmed animals as individuals worthy of care, Alec committed to helping make Sage Mountain a safe home for them. His experience at the sanctuary profoundly shaped his worldview and reinforced his plant-based lifestyle.",
    ],
  },
]

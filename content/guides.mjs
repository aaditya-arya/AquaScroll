const noaaLight = {
  name: "NOAA: Light in the ocean",
  url: "https://oceanservice.noaa.gov/facts/light_travel.html",
};
const layers = {
  name: "NOAA: Layers of the ocean",
  url: "https://www.noaa.gov/jetstream/ocean/layers-of-ocean",
};
const smithsonian = {
  name: "Smithsonian Ocean: The deep sea",
  url: "https://ocean.si.edu/ecosystems/deep-sea/deep-sea",
};
const whoi = {
  name: "Woods Hole: Ocean zones",
  url: "https://www.whoi.edu/ocean-learning-hub/ocean-topics/how-the-ocean-works/ocean-zones/",
};
const depth = {
  name: "NOAA: How deep is the ocean?",
  url: "https://oceanservice.noaa.gov/facts/oceandepth.html",
};
export const UPDATED = "2026-11-06";
// Original reading guides complement the short facts in the scroll experience.
// Paragraphs are plain text, never executable markup supplied by a visitor.
export const GUIDES = [
  {
    slug: "deep-sea",
    kind: "CollectionPage",
    title: "Explore the deep ocean for kids",
    description:
      "Discover ocean zones, surprising sea creatures, ocean depth, and underwater exploration with simple guides for children, parents, and teachers.",
    intro:
      "A bright reef is only the beginning. Follow the water down and discover a world where sunlight disappears, animals make light, and robots become our eyes.",
    sections: [
      [
        "Choose your own ocean question",
        "Why does an anglerfish carry a light? How can a fish see through its own head? What happens when a submarine goes below the last sunlight? Start with the question that makes you curious. Each guide explains one part of the ocean in ordinary language, with links to scientific organizations if you want to investigate further.",
      ],
      [
        "Take the long way down",
        "The AquaScroll journey introduces 120 creatures, one short fact at a time. You can scroll from the surface to Challenger Deep, pause beside an animal, or return to a zone you enjoyed. The guide pages are a different way to explore the same subject: they give you room to understand the reason behind a surprising fact.",
      ],
      [
        "Read the ocean in layers",
        "Ocean zones help us describe how conditions change with depth. They are useful labels, rather than walls that animals cannot cross. A creature may travel between layers, and the amount of light depends on the water above it. Start with the zone guide, then compare a sunlit habitat with a place where sunlight never arrives.",
      ],
      [
        "For curious readers and classrooms",
        "Try choosing one creature and making a prediction about its body before reading its fact. Does it need to hide, find food, or move carefully? Explain your answer to someone else. You do not need an account, a score, or a worksheet to explore. Parents and teachers can use the separate guide for discussion ideas and the privacy page for details about how this website works.",
      ],
    ],
    sources: [smithsonian, whoi],
    related: [
      "deep-sea/ocean-zones-for-kids",
      "deep-sea/how-deep-is-the-ocean",
      "deep-sea/anglerfish-facts",
    ],
  },
  {
    slug: "deep-sea/ocean-zones-for-kids",
    title: "The five ocean zones, explained for kids",
    description:
      "Understand the sunlight, twilight, midnight, abyssal, and hadal zones with simple depth ranges and explanations of light, food, and ocean life.",
    intro:
      "The ocean has layers. As we travel downward, light fades, the weight of water above us grows, and the animals we meet change.",
    sections: [
      [
        "Five names for a changing world",
        "The sunlight zone reaches from the surface to about 200 meters. The twilight zone extends from about 200 to 1,000 meters. Below that, the midnight zone reaches about 4,000 meters, the abyssal zone about 6,000 meters, and the hadal zone includes deeper trenches. These boundaries are a useful scientific map, not lines painted across the sea.",
      ],
      [
        "Light changes the food supply",
        "In bright upper water, tiny organisms use sunlight to make food through photosynthesis. Less sunlight reaches the water below. In the twilight zone, the remaining light is too weak to support this process. Farther down, food can arrive as sinking material, traveling animals, or prey. Some deep habitats also have food webs supported by chemical energy.",
      ],
      [
        "Water is not the same everywhere",
        "Depth is only one clue to a habitat. Temperature, oxygen, currents, and the shape of the seabed matter too. A rocky slope and open water at the same depth can hold different communities. Animals may also move between depths. That is why an encounter label in AquaScroll should not be read as the only place that animal lives.",
      ],
      [
        "Make a five-layer ocean",
        "Draw a tall rectangle and divide it into five bands. Give each band its name and depth range. Add the Sun above the first band, then show its light fading before the midnight zone. Choose an animal from the scroll and ask what it would need in that habitat. Your drawing is a model: it helps explain an idea without copying the full size or complexity of the real ocean.",
      ],
    ],
    sources: [noaaLight, layers, whoi],
    related: [
      "deep-sea/sunlight-zone",
      "deep-sea/twilight-zone",
      "deep-sea/midnight-zone",
      "deep-sea/abyssal-zone",
      "deep-sea/hadal-zone",
    ],
  },
  {
    slug: "deep-sea/sunlight-zone",
    title: "The sunlight zone: ocean life near the surface",
    description:
      "Explore the ocean sunlight zone for kids: where sunlight helps support food webs, sea turtles breathe air, and reefs are built by tiny animals.",
    intro:
      "Look down from the surface. This bright upper layer is where sunlight powers much of the ocean food web.",
    anchor: "sunlight",
    sections: [
      [
        "An ocean powered by sunlight",
        "The sunlight zone, also called the epipelagic zone, extends to about 200 meters. Tiny drifting organisms called phytoplankton use sunlight to make food. They help support animals that eat them, and animals that eat those animals. Even a very large ocean creature can depend on a food web that begins with living things too small to notice from a boat.",
      ],
      [
        "Being underwater does not mean breathing water",
        "Dolphins and sea turtles spend time underwater, but both need air. They must return to the surface to breathe. Fish usually take oxygen from water through their gills. When you meet an animal in AquaScroll, try asking how it breathes. Two neighbors in the same habitat may solve that problem in completely different ways.",
      ],
      [
        "A reef is alive",
        "A coral reef may resemble a garden of colorful rocks and branches, but corals are animals. Many shallow reef-building corals have tiny algae living inside their tissues. The partnership connects a reef to sunlight. Reefs also provide spaces where other creatures can shelter, hunt, or hide. Not every coral lives in bright shallow water, so a reef is only one part of the coral story.",
      ],
      [
        "Look for a useful body shape",
        "Compare a turtle, a ray, and a branching coral. One swims with flippers, another moves with broad fins, and another stays attached in place. Instead of choosing the strangest-looking animal, choose one body part and explain what it helps the animal do. Then continue into the twilight zone and look for a change in eyes, colors, or feeding behavior.",
      ],
    ],
    sources: [
      layers,
      noaaLight,
      {
        name: "Smithsonian Ocean: Corals",
        url: "https://ocean.si.edu/ocean-life/invertebrates/corals-and-coral-reefs",
      },
    ],
    related: ["deep-sea/twilight-zone", "deep-sea/ocean-zones-for-kids"],
  },
  {
    slug: "deep-sea/twilight-zone",
    title: "The ocean twilight zone for kids",
    description:
      "Enter the ocean twilight zone, about 200–1,000 meters deep, and discover faint sunlight, migrating animals, and fish with extraordinary eyes.",
    intro:
      "The Sun has not quite disappeared. But the remaining light is too weak for the sun-powered food making that happens above.",
    anchor: "twilight",
    sections: [
      [
        "A world between daylight and darkness",
        "The twilight zone is also called the mesopelagic zone. It lies roughly 200 to 1,000 meters below the surface. The water is not simply a darker copy of a coral reef. Animals here face a different challenge: there is enough faint light to reveal a silhouette, but not enough to grow a sunlit underwater garden.",
      ],
      [
        "Hide from the eyes below",
        "Imagine looking upward from dark water toward a slightly brighter surface. An animal above you might stand out as a shadow. Some twilight animals have light-producing organs on their undersides that help soften this outline. This use of light is called counterillumination. Making light can help an animal hide, rather than make it easier for every neighbor to spot.",
      ],
      [
        "Dinner can be a journey",
        "Many ocean animals move toward shallower water at night to feed and return deeper during the day. This daily movement is called vertical migration. It links the upper ocean with darker water below. Not every species makes the same journey, and some stay deep. Think of a habitat as a place with visitors and travelers, rather than a room whose residents never leave.",
      ],
      [
        "Meet a fish with a window",
        "The barreleye fish is one of the twilight zone’s remarkable animals. Its transparent head covering protects unusual eyes inside. Read its guide to understand why looking upward can help it find food. Then compare it with an animal from the sunlight zone: what could a transparent covering, a dark body, or a light organ help each creature do? There is more than one successful way to live in dim water.",
      ],
    ],
    sources: [
      noaaLight,
      whoi,
      {
        name: "MBARI: Barreleye fish",
        url: "https://www.mbari.org/animal/barreleye-fish/",
      },
    ],
    related: ["deep-sea/barreleye-fish-facts", "deep-sea/midnight-zone"],
  },
  {
    slug: "deep-sea/midnight-zone",
    title: "The midnight zone: life without sunlight",
    description:
      "Discover the ocean midnight zone, roughly 1,000–4,000 meters deep, where animals use their own light and food arrives from elsewhere.",
    intro:
      "Below about 1,000 meters, sunlight is gone. Darkness does not mean the ocean is empty.",
    anchor: "midnight",
    sections: [
      [
        "Midnight lasts all day",
        "The midnight zone is also called the bathypelagic zone. It extends from about 1,000 to 4,000 meters deep. Noon at the surface does not bring daylight here. A deep-sea animal cannot wait for sunrise to see its surroundings, so finding food, avoiding danger, and meeting another animal require ways of living suited to lasting darkness.",
      ],
      [
        "A flash can mean different things",
        "Bioluminescence is light made by living things through chemical reactions. In deep water, a flash may help attract prey, confuse a predator, or communicate. The same bright dot can have a very different meaning to two animals. An anglerfish’s lure is a famous example, but ocean light is much more varied than a collection of fishing lamps.",
      ],
      [
        "Food falls from another world",
        "Small pieces of dead organisms, waste, and other organic material sink through the water. Scientists call this drifting material marine snow. It connects deep habitats to life above. A large sinking animal can deliver a much bigger meal. Food is not spread evenly, so finding it and using energy carefully can be important parts of deep-sea life.",
      ],
      [
        "Be an observer, not a monster hunter",
        "Large teeth and unusual bodies can look alarming in a photograph. They are features of animals living in difficult conditions, not evidence that the deep sea is full of creatures waiting for people. Choose an animal and describe its body without using the word scary. Ask how that feature could help it eat, move, or remain hidden. A useful explanation is more interesting than a monster story.",
      ],
    ],
    sources: [
      layers,
      smithsonian,
      {
        name: "NOAA: Bioluminescence",
        url: "https://oceanservice.noaa.gov/facts/biolum.html",
      },
    ],
    related: ["deep-sea/anglerfish-facts", "deep-sea/abyssal-zone"],
  },
  {
    slug: "deep-sea/abyssal-zone",
    title: "The abyssal zone: the deep ocean floor",
    description:
      "Learn about the abyssal ocean zone for kids: cold, dark water around 4,000–6,000 meters deep and the animals that find food far below sunlight.",
    intro:
      "Far below the last sunbeam, the ocean spreads across enormous deep plains. Life still has a place here.",
    anchor: "abyss",
    sections: [
      [
        "Deep water and a deep floor",
        "The abyssal zone is a depth band roughly 4,000 to 6,000 meters below the surface. The word abyssal is also used when describing broad deep areas of seabed. Remember the difference between water and ground: a swimming animal can live in water above a plain, while another animal crawls across or burrows into the sediment below.",
      ],
      [
        "An animal can eat the leftovers",
        "Material sinking from upper water brings food into many deep habitats. On the seabed, animals may search through sediment for small nutritious particles. Sea cucumbers are useful creatures to picture when thinking about this kind of feeding. A seemingly quiet patch of mud can contain a community of living things that a distant camera view does not immediately reveal.",
      ],
      [
        "Living under the weight of water",
        "Pressure increases with depth because there is more water overhead. Deep-living animals have bodies adapted to the conditions around them. A human visitor needs protective engineering, but an animal native to deep water does not wear a tiny diving suit. Comparing a resident animal with a visiting research vehicle is a good way to understand why their shapes and materials are so different.",
      ],
      [
        "A camera shows only a little",
        "When a research vehicle lights up the seabed, the visible patch can feel like the whole world. Outside the lights, the habitat continues. Ask what a photograph cannot tell you: how animals move over a day, what is buried under the surface, or what happens farther away. Scientists combine repeated observations, measurements, and samples rather than deciding everything from one striking image.",
      ],
    ],
    sources: [
      layers,
      whoi,
      smithsonian,
      {
        name: "NOAA: Water pressure",
        url: "https://oceanservice.noaa.gov/facts/pressure.html",
      },
    ],
    related: ["deep-sea/hadal-zone", "deep-sea/submarine-facts"],
  },
  {
    slug: "deep-sea/hadal-zone",
    title: "The hadal zone: Earth’s deepest ocean trenches",
    description:
      "Explore the hadal zone below 6,000 meters, the Mariana Trench, and Challenger Deep, with simple explanations of depth, pressure, and life.",
    intro:
      "The deepest ocean is not one flat bottom. Trenches cut farther into the seafloor, creating habitats beyond the abyss.",
    anchor: "trenches",
    sections: [
      [
        "A different kind of landscape",
        "The hadal zone includes ocean depths below about 6,000 meters. These places are mostly trenches: long, deep depressions in the seafloor. Think of a landscape with valleys rather than a bathtub with a level bottom. Different trenches are separated by shallower ground, so the deepest habitats do not form one continuous belt around the planet.",
      ],
      [
        "Where Challenger Deep belongs",
        "Challenger Deep is in the Mariana Trench in the western Pacific. NOAA gives its approximate depth as 10,935 meters. That number describes an extraordinarily deep location, not the average ocean floor. AquaScroll ends there to help you compare the shallow sea with one of the most extreme places that ocean exploration has reached.",
      ],
      [
        "Deep does not mean lifeless",
        "Some animals live in trench habitats even though sunlight never reaches them. Food arriving from above can still support life, and scientists study how organisms cope with intense pressure. Do not assume that every animal shown near a trench lives at its very bottom. A record of a fish at one depth also does not prove that fish live at every greater depth.",
      ],
      [
        "What would count as evidence?",
        "Suppose someone tells you that a new animal has been found deeper than ever before. Ask where it was observed, how depth was measured, and whether there is an image, specimen, or research report. These questions do not spoil a discovery. They help explain why the discovery matters. After your virtual descent, choose one fact to investigate using a scientific source linked in the site’s credits.",
      ],
    ],
    sources: [
      layers,
      depth,
      {
        name: "University of Western Australia: Deepest fish filmed",
        url: "https://www.uwa.edu.au/news/Article/2023/April/Scientists-break-new-record-after-finding-worlds-deepest-fish",
      },
    ],
    related: ["deep-sea/how-deep-is-the-ocean", "deep-sea/submarine-facts"],
  },
  {
    slug: "deep-sea/how-deep-is-the-ocean",
    title: "How deep is the ocean? A simple guide for kids",
    description:
      "Compare the ocean’s average depth of about 3,682 meters with Challenger Deep at approximately 10,935 meters, and learn what those numbers mean.",
    intro:
      "There is no single ocean depth. Just as land has hills and valleys, the seabed has shelves, mountains, plains, and trenches.",
    sections: [
      [
        "Average is different from deepest",
        "NOAA describes the average ocean depth as about 3,682 meters. Challenger Deep, in the Mariana Trench, is approximately 10,935 meters deep. An average combines many different places into one useful number. A deepest point describes an extreme. Neither number means that a boat would find the same amount of water underneath it everywhere it sailed.",
      ],
      [
        "Turn meters into a distance",
        "A kilometer contains 1,000 meters. That makes the deepest part of this virtual journey almost 11 kilometers below the surface. Imagine a familiar kilometer-long route, then imagine that distance continuing downward many times. It is only a distance comparison: walking through your neighborhood does not reproduce darkness, cold, or the growing pressure of deep water.",
      ],
      [
        "How can we measure a hidden floor?",
        "Scientists can use sound to investigate the seabed. Sound travels through water, reflects from the bottom, and returns to a receiver. The travel time helps estimate distance. Instruments and careful corrections matter because the ocean is not a simple empty swimming pool. Detailed measurements build a picture of terrain that people cannot see by looking down from a ship.",
      ],
      [
        "Read the depth counter carefully",
        "In AquaScroll, the meter counter follows the encounter nearest the middle of your screen. Creatures appear at representative storytelling depths, and the gaps between them are not a constant physical scale. A long screen section does not mean that part of the real ocean is thicker. Use the labeled numbers to compare depths, and use the separate ocean-zone guide to understand the broad layers.",
      ],
    ],
    sources: [
      depth,
      {
        name: "NOAA: Mapping the ocean",
        url: "https://oceanservice.noaa.gov/facts/sonar.html",
      },
    ],
    related: ["deep-sea/ocean-zones-for-kids", "deep-sea/hadal-zone"],
  },
  {
    slug: "deep-sea/anglerfish-facts",
    title: "Deep-sea anglerfish facts for kids",
    image: "anglerfish",
    imageAlt: "Black seadevil anglerfish specimen with a lure above its head",
    description:
      "Why does a deep-sea anglerfish have a glowing lure? Learn how its fishing-rod shape helps it find food in a world without sunlight.",
    intro:
      "A little light hangs in the darkness. For some deep-sea anglerfish, that light is a way to bring dinner closer.",
    sections: [
      [
        "A fishing rod attached to a fish",
        "Female deep-sea anglerfish in several groups have a modified fin spine that projects from the head. At its end is a lure. The shape inspired the name anglerfish: an angler is someone who fishes with a rod. Instead of holding a rod, the fish carries part of the equipment on its own body.",
      ],
      [
        "Where does the glow come from?",
        "In many deep-sea anglerfish, bacteria living inside the lure produce light. This living light is called bioluminescence. It is different from reflecting a flashlight. A small glowing lure can attract another animal’s attention in dark water. If prey approaches close enough, the anglerfish can catch it with its mouth rather than chase it through a large patch of ocean.",
      ],
      [
        "There is more than one anglerfish",
        "Anglerfish is a name for a varied group, not one single creature with identical habits. Some live on the seafloor, while others live in open water. The famous glowing deep-sea females are only part of that variety. Be careful with claims that every anglerfish has the same size, appearance, or relationship between males and females.",
      ],
      [
        "Try explaining the surprise",
        "Before reading this page, a glowing lure might have seemed like a decoration. Now connect it to a problem: finding food in darkness. Draw an anglerfish and label the lure, mouth, and surrounding water. Add an arrow showing which animal moves closer. Then compare the drawing with a barreleye fish. Both live in dim or dark ocean habitats, but their bodies offer different ways to find a meal.",
      ],
    ],
    sources: [
      {
        name: "MBARI: Deep-sea anglerfish",
        url: "https://www.mbari.org/animal/deep-sea-anglerfish/",
      },
      smithsonian,
    ],
    related: ["deep-sea/midnight-zone", "deep-sea/barreleye-fish-facts"],
  },
  {
    slug: "deep-sea/barreleye-fish-facts",
    title: "Barreleye fish facts: a fish with a transparent head",
    image: "barreleye",
    imageAlt: "A collected barreleye fish specimen resting on a hand",
    imageCaption:
      "A collected specimen. See the MBARI source below for observations of living fish.",
    description:
      "Meet the barreleye fish and understand its transparent head, green tubular eyes, and remarkable way of watching for food in the twilight zone.",
    intro:
      "Those green shapes inside the head are eyes. A clear, fluid-filled covering protects them while this fish watches the dim ocean above.",
    sections: [
      [
        "Find the real eyes",
        "In photographs of Macropinna microstoma, the barreleye fish, two small dark marks near the front can look like eyes. They are smell organs. The eyes are the green, tube-shaped structures farther inside the transparent head covering. Taking a second look changes how you understand the whole face. An animal’s familiar-looking features are not always the parts you first think they are.",
      ],
      [
        "Why look upward?",
        "In dim water, looking toward the brighter surface can reveal food above. The barreleye’s tubular eyes are suited to this upward view. MBARI observations showed that the eyes can also rotate forward. The fish can shift its view as it moves toward food, rather than being stuck looking upward all the time. The clear covering leaves room for these unusual eyes.",
      ],
      [
        "A covering, not an empty head",
        "Transparent does not mean hollow, and the fish is not a floating glass toy. Its head contains living tissues protected by a delicate dome. Photos of collected deep-sea animals can look different from observations of living animals underwater. That is one reason research vehicles and careful video observations have helped scientists understand creatures that are difficult to bring to the surface intact.",
      ],
      [
        "Look before you label",
        "Try sketching the fish from a photograph before adding labels. Mark which features you are sure about and which ones are guesses. Then use the explanation here to correct your drawing. This is a small version of a scientific habit: observe carefully, test an interpretation, and change it when evidence helps you see something you missed. Continue through the twilight zone to meet more animals adapted to faint light.",
      ],
    ],
    sources: [
      {
        name: "MBARI: Barreleye fish",
        url: "https://www.mbari.org/animal/barreleye-fish/",
      },
    ],
    related: ["deep-sea/twilight-zone", "deep-sea/anglerfish-facts"],
  },
  {
    slug: "deep-sea/submarine-facts",
    title: "Submarine and underwater robot facts for kids",
    description:
      "Learn how human-occupied submersibles, remotely operated vehicles, and autonomous underwater robots help scientists explore the deep ocean.",
    intro:
      "People cannot simply swim to the deepest ocean. Special underwater vehicles carry cameras, instruments, and sometimes people into that world.",
    sections: [
      [
        "Not every explorer has a passenger",
        "A human-occupied vehicle carries people inside a protective compartment. A remotely operated vehicle, or ROV, is controlled from elsewhere, commonly through a tether to a ship. An autonomous underwater vehicle, or AUV, follows a planned mission using onboard systems. These are different tools for different questions, rather than three names for the same machine.",
      ],
      [
        "Why a strong shell matters",
        "A vehicle carrying people must keep them safe from the surrounding water pressure. Its passenger compartment needs careful engineering, and the crew needs air and other life-support systems. An underwater robot does not need a cabin for a pilot, but its electronics and instruments still need protection. Every design has limits: a vehicle built for shallow work cannot automatically visit the deepest trench.",
      ],
      [
        "Bring back more than a photograph",
        "Cameras help scientists observe animals and landscapes. Sensors measure conditions, and some vehicles have tools for collecting samples. A beautiful image can raise a question, while measurements and repeated observations help answer it. Imagine seeing an unfamiliar animal beside a rock: a useful mission might record its depth, the water conditions, and what it does over time.",
      ],
      [
        "Plan a tiny research mission",
        "Choose one question before choosing your vehicle. Would you like to watch an animal closely, map a wide area, or collect a small sample? Explain what equipment you would bring and why. Draw your imagined vehicle and label the useful parts. You can do this on paper without entering information into the website. Then return to the ocean journey and think about how each animal photograph became possible.",
      ],
    ],
    sources: [
      {
        name: "NOAA Ocean Exploration: Submersibles",
        url: "https://oceanexplorer.noaa.gov/technology/subs/",
      },
    ],
    related: ["deep-sea/how-deep-is-the-ocean", "deep-sea/hadal-zone"],
  },
  {
    slug: "for-parents",
    kind: "AboutPage",
    title: "AquaScroll for parents and teachers",
    description:
      "Use AquaScroll for family ocean exploration and classroom discussion. Learn about the short facts, scientific sources, accessibility, and privacy choices.",
    intro:
      "AquaScroll is a self-paced introduction to ocean life. Children can explore a long visual descent, while the reading guides explain the questions behind the surprises.",
    sections: [
      [
        "Start with curiosity, not completion",
        "There is no requirement to finish the whole ocean in one sitting. Choose a zone, meet a few animals, and ask which fact deserves another look. The experience has no scores, prizes, account system, or public comments. Each creature has one short statement so that the main journey stays easy to scan. Longer explanations live on separate pages.",
      ],
      [
        "Use one question to begin a conversation",
        "Ask a child to describe how an animal finds food, hides, or moves. Invite them to point to the body feature that supports their answer. Compare two animals from different depths, then look for a similarity as well as a difference. Drawing a labeled creature or a five-layer ocean can turn a quick visit into a useful conversation without adding a test.",
      ],
      [
        "Know what the model leaves out",
        "The creatures represent different oceans and habitats. Their encounter depths are selected positions, not complete species ranges. Screen spacing is arranged for reading rather than a constant depth scale. Photographs can show aquarium animals or collected specimens, and some encounters use stylized artwork. Scientific sources and image credits are collected at the bottom of the experience.",
      ],
      [
        "Access and privacy",
        "The text and images are available without JavaScript. Motion preferences are respected when animations run, and the website supports keyboard navigation and narrow screens. The application has no analytics, advertising, visitor profiles, or forms. Hosting providers may process ordinary technical requests; see the privacy page for the distinction. External scientific links leave AquaScroll. Adults can report factual or accessibility problems through the project repository, without sharing a child’s personal information.",
      ],
    ],
    sources: [],
    related: ["deep-sea", "deep-sea/ocean-zones-for-kids", "privacy"],
  },
  {
    slug: "privacy",
    kind: "WebPage",
    title: "AquaScroll privacy policy",
    description:
      "How AquaScroll handles privacy: no accounts, forms, behavioral advertising, analytics, or browser storage in the application, and what hosting can process.",
    intro:
      "This policy describes the AquaScroll application in this repository. It separates what the website code does from technical processing performed by the service that hosts it.",
    sections: [
      [
        "What the application collects",
        "AquaScroll has no registration, contact form, comments, uploads, purchases, or visitor profiles. The application does not ask for names, email addresses, ages, location, photographs, camera access, or microphone access. It does not include analytics scripts, advertising networks, behavioral advertising, tracking pixels, cookies, or local-storage identifiers. Creature interactions and the depth counter run on your device without sending activity reports.",
      ],
      [
        "Requests needed to deliver the website",
        "Opening any hosted website sends technical information to its server, such as an IP address, requested address, and browser request headers. The hosting provider may keep access or security logs under its own settings and policies. This repository does not establish the provider’s retention period or contractual practices. Deployment operators need to review those details before publishing or changing hosting, rather than promise that no technical information is ever processed.",
      ],
      [
        "Images, fonts, and other websites",
        "The application serves its fonts and creature images locally. It does not embed social feeds, video players, or third-party image requests. Links to scientific sources, image originals, license pages, and the project repository take you to other websites. Those websites have their own privacy practices. Reading a linked source is optional, and an adult can help a child decide when to leave AquaScroll.",
      ],
      [
        "Children, questions, and future changes",
        "The site is designed for children to read without submitting personal information. Adults can contact the maintainer through the linked project repository to raise a privacy concern. Do not put a child’s name, contact details, or other private information into a public issue. If future versions introduce data collection, accounts, advertising, or new services, their operator must review the relevant children’s privacy requirements and update this policy before enabling them. This page does not certify a deployment’s legal compliance.",
      ],
    ],
    sources: [
      {
        name: "Project repository and maintainer",
        url: "https://github.com/aaditya-arya/AquaScroll",
      },
      {
        name: "FTC: Children’s privacy guidance",
        url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy",
      },
    ],
    related: ["for-parents", "deep-sea"],
  },
];

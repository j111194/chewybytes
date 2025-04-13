export interface GameData {
  id: string
  title: string
  slug: string
  emoji: string
  category: string
  tag: string // Tag for the game (e.g., "Casual")
  shortDescription: string // Subtitle
  description: string
  isAvailable: boolean
  showReviews: boolean
  featuredOnHomepage?: boolean
  appIcon: string
  logo?: string
  rating: number | string
  reviewCount: string
  storeLinks: {
    appStore: string
    googlePlay: string
  }
  // Hero video for homepage
  heroVideo?: {
    thumbnailSrc: string
    videoSrc: string
    autoplay: boolean
  }
  // Detail page video
  detailVideo?: {
    thumbnailSrc: string
    videoSrc: string
    autoplay: boolean
  }
  features: {
    title: string
    description: string
    icon: string
  }[]
  screenshots: {
    src: string
    alt: string
  }[]
  videos: {
    thumbnailSrc: string
    videoSrc: string
    title: string
  }[]
  reviews: {
    name: string
    rating: number
    text: string
    source: string
    date: string
  }[]
}

export const games: GameData[] = [
  {
    id: "dr-chop",
    title: "Dr. Chop",
    slug: "dr-chop",
    emoji: "🔪",
    category: "Action",
    tag: "Action",
    shortDescription: "Slice, dice, and chop your way to victory!",
    description:
      "Dr. Chop is a fast-paced slicing game where you play as the titular doctor who has a peculiar way of solving problems—chopping them in half! With precise swipes and strategic timing, slice through waves of objects, avoid hazards, and rack up combos for high scores.",
    isAvailable: false,
    showReviews: false,
    featuredOnHomepage: false,
    appIcon: "/dr-chop/appicon.png",
    logo: "/placeholder.svg?height=120&width=120",
    rating: "N/A",
    reviewCount: "10K+",
    storeLinks: {
      appStore: "https://apps.apple.com/us/app/dr-chop/id1234567890",
      googlePlay: "https://play.google.com/store/apps/details?id=com.pixelplaystudios.drchop",
    },
    heroVideo: {
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "/DontPopbob.mp4",
      autoplay: true,
    },
    detailVideo: {
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "/placeholder-video.mp4",
      autoplay: false,
    },
    features: [
      {
        title: "Precision Slicing",
        description: "Swipe with precision to slice objects perfectly in half for maximum points.",
        icon: "🔪",
      },
      {
        title: "120+ Levels",
        description: "Progress through over 120 increasingly challenging levels across 6 unique environments.",
        icon: "🌍",
      },
      {
        title: "Power-ups",
        description: "Collect and activate special power-ups like time slow, multi-slice, and mega chop.",
        icon: "⚡",
      },
      {
        title: "Boss Battles",
        description: "Face off against epic bosses that require special slicing strategies to defeat.",
        icon: "👹",
      },
      {
        title: "Daily Challenges",
        description: "Return daily for special challenges with unique rewards and leaderboard positions.",
        icon: "🏆",
      },
      {
        title: "Character Customization",
        description: "Unlock and equip various outfits and slicing tools to personalize your Dr. Chop.",
        icon: "👨‍⚕️",
      },
    ],
    screenshots: [
      {
        src: "/placeholder.svg?height=600&width=300",
        alt: "Dr. Chop gameplay showing fruit slicing",
      },
      {
        src: "/placeholder.svg?height=600&width=300",
        alt: "Dr. Chop special power-up activation",
      },
      {
        src: "/placeholder.svg?height=600&width=300",
        alt: "Dr. Chop boss battle screen",
      },
      {
        src: "/placeholder.svg?height=600&width=300",
        alt: "Dr. Chop character customization screen",
      },
    ],
    videos: [
      {
        thumbnailSrc: "/placeholder.svg?height=720&width=1280",
        videoSrc: "/placeholder-video.mp4",
        title: "Dr. Chop Gameplay Trailer",
      },
    ],
    reviews: [
      {
        name: "Alex M.",
        rating: 5,
        text: "This game is incredibly addictive! The slicing mechanics are so satisfying and the progression system keeps me coming back for more.",
        source: "App Store",
        date: "March 15, 2023",
      },
      {
        name: "Jamie L.",
        rating: 4,
        text: "Super fun game that's perfect for quick play sessions. The only reason it's not 5 stars is because I wish there were more levels!",
        source: "Google Play",
        date: "February 22, 2023",
      },
      {
        name: "Taylor K.",
        rating: 5,
        text: "The physics in this game are amazing. I love how different objects react differently when you slice them. Great attention to detail!",
        source: "App Store",
        date: "January 10, 2023",
      },
    ],
  },
  {
    id: "dont-pop-bob",
    title: "Don't asdfasd asdf  Bob",
    slug: "dont-pop-bob",
    emoji: "🎈",
    category: "Casual Game",
    tag: "Casual",
    shortDescription: "Guide Bob the balloon through a world of dangers!",
    description:
      "asdofijlkjasdflkj lkasdf kljasd flkjasdfl jkenvironments filled with sharp objects and hazards. Tap and hold to float higher, release to descend, and navigate carefully to keep Bob intact!",
    isAvailable: true,
    showReviews: true,
    featuredOnHomepage: true,
    appIcon: "/dont-pop-bob/appicon.png",
    logo: "/placeholder.svg?height=120&width=120",
    rating: 4.9,
    reviewCount: "15K+",
    storeLinks: {
      appStore: "https://apps.apple.com/us/app/dont-pop-bob/id6447240871",
      googlePlay: "https://play.google.com/store/apps/details?id=com.chewybytes.dontpopbob&hl=en",
    },
    heroVideo: {
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "/dont-pop-bob/DontPopbob.mp4",
      autoplay: true,
    },
    detailVideo: {
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "/dont-pop-bob/DontPopBob_1920x1080_1.mp4",
      autoplay: false,
    },
    features: [
      {
        title: "Simple Controls",
        description: "Intuitive tap-and-hold mechanics that anyone can pick up in seconds.",
        icon: "👆",
      },
      {
        title: "asdfasdf asdf + Levels",
        description: "Navigate through over 50 uniquely designed levels across 5 different worlds.",
        icon: "🌈",
      },
      {
        title: "Character Skins",
        description: "Unlock different balloon characters, each with their own special abilities.",
        icon: "🎈",
      },
      {
        title: "Physics-Based Gameplay",
        description: "Realistic balloon physics make every playthrough a unique experience.",
        icon: "🔄",
      },
      {
        title: "Family Friendly",
        description: "Suitable for all ages with no violence or inappropriate content.",
        icon: "👨‍👩‍👧‍👦",
      },
      {
        title: "Offline Play",
        description: "No internet connection required - play anywhere, anytime!",
        icon: "🔌",
      },
    ],
    screenshots: [
      {
        src: "/dont-pop-bob/1.jpg",
        alt: "Don't Pop Bob gameplay in the park level",
      },
      {
        src: "/dont-pop-bob/2.jpg",
        alt: "Don't Pop Bob navigating through a factory",
      },
      {
        src: "/dont-pop-bob/3.jpg",
        alt: "Don't Pop Bob character selection screen",
      },
      {
        src: "/dont-pop-bob/4.jpg",
        alt: "Don't Pop Bob power-up collection",
      },
      {
        src: "/dont-pop-bob/5.jpg",
        alt: "Don't Pop Bob power-up collection",
      },
      {
        src: "/dont-pop-bob/6.jpg",
        alt: "Don't Pop Bob power-up collection",
      },
      {
        src: "/dont-pop-bob/7.jpg",
        alt: "Don't Pop Bob power-up collection",
      },
    ],
    videos: [
      {
        thumbnailSrc: "/placeholder.svg?height=720&width=1280",
        videoSrc: "dont-pop-bob/DontPopBob_1920x1080_1.mp4",
        title: "Don't Pop Bob Gameplay Trailer",
      },
    ],
    reviews: [
      {
        name: "Riley T.",
        rating: 5,
        text: "Don't Pop Bob is hilarious and challenging! My kids and I can't stop playing it. The balloon physics are spot on!",
        source: "App Store",
        date: "April 3, 2023",
      },
      {
        name: "Morgan P.",
        rating: 5,
        text: "Such a creative concept! I love the different environments and obstacles. The sound effects make me laugh every time.",
        source: "Google Play",
        date: "March 18, 2023",
      },
      {
        name: "Casey J.",
        rating: 4,
        text: "Super fun game with adorable characters. Would give 5 stars if there were more customization options for Bob.",
        source: "App Store",
        date: "February 5, 2023",
      },
    ],
  },
  {
    id: "neo-dodge",
    title: "NeoDodge",
    slug: "neo-dodge",
    emoji: "🚀",
    category: "Arcade",
    tag: "Arcade",
    shortDescription: "Navigate the neon grid, survive the digital storm!",
    description:
      "NeoDodge is a high-octane arcade game set in a retro-futuristic digital world. Control your ship with precision as you navigate through an endless stream of neon obstacles. With each level, the speed increases and the patterns become more complex. How long can you survive in this synthwave-inspired challenge?",
    isAvailable: true,
    showReviews: true,
    featuredOnHomepage: false,
    appIcon: `/neo-dodge/appicon.jpg`,
    logo: "/placeholder.svg?height=120&width=120",
    rating: 4.7,
    reviewCount: "8K+",
    storeLinks: {
      appStore: "https://apps.apple.com/us/app/neododge/id6448055557",
      googlePlay: "https://play.google.com/store/apps/details?id=com.chewybytes.neododge",
    },
    heroVideo: {
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "/placeholder-video.mp4",
      autoplay: true,
    },
    detailVideo: {
      thumbnailSrc: "/placeholder.svg?height=720&width=1280",
      videoSrc: "/placeholder-video.mp4",
      autoplay: false,
    },
    features: [
      {
        title: "Endless Gameplay",
        description: "No two runs are the same with procedurally generated obstacle patterns.",
        icon: "🔄",
      },
      {
        title: "Stunning Visuals",
        description: "Immerse yourself in a neon-soaked, synthwave-inspired visual experience.",
        icon: "✨",
      },
      {
        title: "Original Soundtrack",
        description: "Pulse-pounding synthwave tracks that adapt to your gameplay intensity.",
        icon: "🎵",
      },
      {
        title: "Multiple Ships",
        description: "Unlock and pilot different ships, each with unique handling and special abilities.",
        icon: "🚀",
      },
      {
        title: "Global Leaderboards",
        description: "Compete with players worldwide to claim the top spot on the leaderboards.",
        icon: "🏆",
      },
      {
        title: "Achievement System",
        description: "Complete challenges to unlock achievements and earn special rewards.",
        icon: "🎯",
      },
    ],
    screenshots: [
      {
        src: "/neo-dodge/1.jpg",
        alt: "NeoDodge gameplay showing neon obstacles",
      },
      {
        src: "/neo-dodge/2.jpg",
        alt: "NeoDodge power-up activation",
      },
      {
        src: "/neo-dodge/3.jpg",
        alt: "NeoDodge ship selection screen",
      },
      {
        src: "/neo-dodge/4.jpg",
        alt: "NeoDodge high score leaderboard",
      },
      {
        src: "/neo-dodge/5.jpg",
        alt: "NeoDodge high score leaderboard",
      },
      {
        src: "/neo-dodge/6.jpg",
        alt: "NeoDodge high score leaderboard",
      },
    ],
    videos: [
      {
        thumbnailSrc: "/placeholder.svg?height=720&width=1280",
        videoSrc: "/placeholder-video.mp4",
        title: "NeoDodge Teaser Trailer",
      },
    ],
    reviews: [
      {
        name: "Jordan H.",
        rating: 5,
        text: "NeoDodge is the perfect blend of retro and modern. The neon visuals are stunning and the gameplay is addictively challenging!",
        source: "App Store",
        date: "May 12, 2023",
      },
      {
        name: "Quinn R.",
        rating: 4,
        text: "Love the synthwave soundtrack and the responsive controls. Would be perfect with more ship customization options.",
        source: "Google Play",
        date: "April 29, 2023",
      },
      {
        name: "Avery M.",
        rating: 5,
        text: "This game is a masterpiece of minimalist design. The difficulty curve is perfect and keeps me coming back for more.",
        source: "App Store",
        date: "March 17, 2023",
      },
    ],
  },
]

export function getGameBySlug(slug: string): GameData | undefined {
  return games.find((game) => game.slug === slug)
}

export function getFeaturedGame(): GameData | undefined {
  return games.find((game) => game.featuredOnHomepage) || games[0]
}

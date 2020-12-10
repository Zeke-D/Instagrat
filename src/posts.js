class Comment {
   constructor(username, text) {
       this.username = username;
       this.text = text;
   }
}

const usernames = ["Mark Wentley", "Hayley Bosnin",
               "Chuck M.", "Marilyn M.", "Mike Ranchsmith", 
               "Jave Ramirez", "James Marvin", "Caroline Beckett"
];

const comments = [
    "Beautiful!", "Brave", "You are so inspiring", "Oh my god, yes!",
    "This is what the world needs more of.", "I wish I was you.", "Keep being yourself!",
    "I couldn't have said it better myself.", "Gorgeous!!!"
];

const emojis = ['❤️', '😭', '🥺', '✨', '😍', '🙏'];

const random = arr => { 
    return arr[Math.floor(Math.random() * arr.length)];
}

const randomComments = (numComments, ignoreUsers = []) => {
    let all = [];
    let usrs = usernames.filter(name => !ignoreUsers.includes(name));
    for (let i = 0; i < numComments; i++) {
        all.push(
            new Comment(random(usrs), random(comments) + random(emojis)));
    }
    return all;
}

const Posts = [
    {
        username: "Sarah Lynn",
        caption: "Life didn't exist before the sea 🌊. Hey everyone, I know life can be unfair sometimes. I've been going through some stuff, and it makes me feel greta knowing you all have my back.",
        likes: 13,
        imgSource: "sea.jpg",
        comments: [
            new Comment("James Marvin", "Hey Sarah, maybe this isn't the place for that kinda thing?"),
            new Comment("Caroline Beckett", "Not gonna lie Sarah that's a l'il much. Can't even spell \"great\" correctly LOL"),
            new Comment("Jave Ramirez", "Yeah... yikes 💀"),
        ]
    },
    {
        username: "James Marvin",
        caption: "I've never been happier",
        likes: 139,
        imgSource: "red-shirt.jpg",
        comments: randomComments(3, "James Marvin")
    },
    {
        username: "Jave Ramirez",
        caption: "Me and all my friends 😂",
        likes: 210,
        imgSource: "bench.jpg",
        comments: randomComments(3, "Jave Ramirez")
    },
    {
        username: "Sarah Lynn",
        caption: "This is what life was meant to be :)",
        likes: 210,
        imgSource: "yellow-shirt.jpg",
        realitySource: "crying.jpg",
        comments: randomComments(3)
    },
    {
        username: "Caroline Beckett",
        caption: "Highway to hell!",
        likes: 301,
        imgSource: "yoga.jpg",
        comments: randomComments(3, "Caroline Beckett")
    },
    {
        username: "Sarah Lynn",
        caption: "I'm feelin ~~alive~~",
        likes: 270,
        imgSource: "smile.jpg",
        realitySource: "pills.jpg",
        comments: [new Comment("Caroline Beckett", "See, you didn't have to be such an attention whore earlier 😘"),
                   new Comment("Jave Ramirez", "True Caroline 😭"),
                    ...randomComments(2, ["Jave Ramirez", "Caroline Beckett"])    
        ]
    },
    {
        username: "Caroline Beckett",
        caption: "Love these goons!",
        likes: 345,
        imgSource: "yoga2.jpg",
        comments: randomComments(3, "Caroline Beckett")
    },
    {
        username: "James Marvin",
        caption: "My cowboy look makes the cowgirls swoon",
        likes: 345,
        imgSource: "hay.jpeg",
        comments: [
            new Comment("Jave Ramirez", "More like makes the cows swoon 😭"),
            new Comment("Beth Wilcox", "Psss please"),
            new Comment("Caroline Beckett", "Yeah, what a charmer 😭"),
        ]
    },
    {
        username: "Sarah Lynn",
        caption: "Smiling all the way :)",
        realityCaption: "Help me, please, somebody :(",
        likes: 301,
        imgSource: "green.jpg",
        realitySource: "drowning.jpg",
        comments: randomComments(3)
    },
    {
        username: "Jave Ramirez",
        caption: "Life could be worse ¯\\_(ツ)_/¯",
        likes: 361,
        imgSource: "jave.jpg",
        comments: [
            new Comment("James Marvin", "That dog is cuter than you could ever be."),
            new Comment("Beth Wilcox", "True Jave, you could be Sarah 😭"),
            new Comment("Caroline Beckett", "Aahahahahaha facts"),
        ]
    },
    {
        username: "Sarah Lynn",
        caption: "This world has so much pain.",
        realityCaption: "Goodbye.",
        likes: 12,
        imgSource: "black.png",
        realitySource: "bathtub.jpg",
        comments: [
            new Comment("Jave Ramirez", "???"),
            new Comment("Beth Wilcox", "You're scaring me Sarah..."),
            new Comment("Caroline Beckett", "Sarah this is a lot, even for you..."),
        ],
        style: "margin-bottom: 300px"
    },
    {
        username: "Beth Wilcox",
        caption: "Today we lost one of the brightest souls I've ever known. I know you're happier now.",
        likes: 712,
        imgSource: "fun1.jpg",
        comments: [
            new Comment("James Marvin", "RIP"),
            new Comment("Caroline Beckett", "I'm so sorry for your loss."),
        ]
    },
    {
        username: "Brittney Lynn",
        caption: "God has other plans for you, my love. You were the best sister I could have ever asked for. I feel so lost without you.",
        likes: 712,
        imgSource: "fun2.jpg",
        comments: [
            new Comment("James Marvin", "RIP"),
            new Comment("Caroline Beckett", "I'm so sorry for your loss."),
        ]
    },
    {
        username: "Jave Ramirez",
        caption: "I had known you since preschool, and this feels so raw. I never saw this coming, not from someone who was as strong as you. You continue to inspire me, Sarah.",
        likes: 839,
        imgSource: "fin.jpg",
        comments: []
    },

];
export default Posts;
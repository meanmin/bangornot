/*
10개 -> FBI? CIA? KGB? MI6? or.. James Bond?
8,9개 -> Hey Siri, play "attention" by NewJeans
5,6,7개 -> Channel your inner Solomon.
2,3,4개 -> A whole new world! 
0,1개 -> Pacifist? or our potential user?
*/

const qnaList = [
    {
        q: '1. Which sound is a gunshot?',
        a: [
            { answer: 'A', correct: false },
            { answer: 'B', correct: true },
            { answer: 'C', correct: false },
        ],
        audio: "audio-1.mp3",
    },

    {
        q: '2. Which sound is not a gunshot?',
        a: [
            { answer: 'A', correct: false },
            { answer: 'B', correct: true },
            { answer: 'C', correct: false },
        ],
        audio: "audio-2.mp3",
    },

    {
        q: '3. Which sound is a gunshot?',
        a: [
            { answer: 'A', correct: true },
            { answer: 'B', correct: false },
            { answer: 'C', correct: false },
        ],
        audio: "audio-3.mp3",
    },

    {
        q: '4. Which sound is not a gunshot?',
        a: [
            { answer: 'A', correct: false },
            { answer: 'B', correct: false },
            { answer: 'C', correct: true },
        ],
        audio: "audio-4.mp3",
    },

    {
        q: '5. Which sound is a gunshot?',
        a: [
            { answer: 'A', correct: true },
            { answer: 'B', correct: false },
            { answer: 'C', correct: false },
        ],
        audio: "audio-5.mp3"
    },

    {
        q: '6. Which sound is not a gunshot?',
        a: [
            { answer: 'A', correct: true },
            { answer: 'B', correct: false },
            { answer: 'C', correct: false },
        ],
        audio: "audio-6.mp3",
    },
    {
        q: '7. Which sound is a gunshot?',
        a: [
            { answer: 'A', correct: true },
            { answer: 'B', correct: false },
            { answer: 'C', correct: false },
        ],
        audio: "audio-7.mp3",
    },

    {
        q: '8. Which sound is not a gunshot?',
        a: [
            { answer: 'A', correct: false },
            { answer: 'B', correct: false },
            { answer: 'C', correct: true },
        ],
        audio: "audio-8.mp3",
    },

    {
        q: '9. Which sound is a gunshot?',
        a: [
            { answer: 'A', correct: true },
            { answer: 'B', correct: false },
            { answer: 'C', correct: false },
        ],
        audio: "audio-9.mp3",
    },

    {
        q: '10. Which sound is not a gunshot?',
        a: [
            { answer: 'A', correct: false },
            { answer: 'B', correct: true },
            { answer: 'C', correct: false },
        ],
        audio: "audio-10.mp3",
    }
]

const infoList = [
    {
        name: 'FBI? CIA? KGB? MI6? or.. James Bond?',
        desc: 'Did you serve in the army, or are you an agent from a secret organization? We want to hire you as HI(Human Intelligence) instead of AI. Are you interested in?',
    },
    {
        name: 'Hey Siri, play "attention" by NewJeans',
        desc: 'You have better hearing than most people. <br> Even when you"re not trying to pay attention, you can hear what others are saying. If you pay a bit more attention, you"ll get 100% correct answers. You are almost there, looking for attention!',
    },
    {
        name: 'Channel your inner Solomon.',
        desc: 'When you listen to the sounds, you may think it can be both this and that sounds. However, be aware that there is only one answer for each question. Having your own standard of judgment, listen again and get the answer. You can be a King Solomon.',
    },
    {
        name: 'A whole new world!',
        desc: 'You haven"t experienced many different sounds in the world yet, so everything seems new to you. It"s natural for us to gain experience to understand what things are. Let"s think of this way: Your ears were born anew today, and all you have to do is enjoying the sounds in the world!',
    },
    {
        name: 'Pacifist? or our potential user?',
        desc: 'You definitely need us to live in this world! Or perhaps you want to become a pacifist and encourage a peaceful mindset for human beings in the world. However, sadly, the world is not 100% safe as you might think So, we can help you! How about integrating us into your daily life?',
    },
]
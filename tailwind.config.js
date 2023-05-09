/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bodyColor: "#FAE5D0",
                appaBackground: "#AEA093",
                aangPink: "#F17A76",
                woodColor: "#C57A6B",
                borderColor: "#CEB383",
                textColor: "#202025",
                iceColor: "#518AC1",
                logoC: "#1DA1F2",
               mainBlack: "#010101",
               mainWhite: "#F7FBFA",
               gray03: "#E1E2E2",
               gray05: "#686A6C",
               acc04: "#DBFF73",
               acc02: "#B9A9FB",
               acc06: "#6DD3C2",
            },
            screens: {
                xs: "320px",
                s: "768px",
                md: "1200px",
                m: "1440px"
            },
            fontFamily: {
                caveat:["Caveat", "sans-serif"],
                bellota: ["Bellota", "sans-serif"]
            },
            keyframes: {
                levitate: {
                  '0%, 100%': {transform: 'rotate(2deg) translate(0,0)'  },
                  '50%': {transform: 'rotate(0deg) translate(0,10%)' },
                },
                like: {
                    'from': { backgroundPosition: '0px' },
                    'to' :  { backgroundPosition: '-2400px' },
                },
                born:{
                    'from':{opacity:0},
                    'to':{opacity:100}
                },
                die:{
                    'from':{opacity:100},
                    'to':{opacity:0}
                },
                left:{
                    'to':{transform: 'translate(10%,0)'}
                },
                right:{
                    'to':{transform: 'translate(-10%,0)'}
                },
            },
            animation: {
                'levitate': 'levitate 5s ease-in-out infinite',
                'likeAnim' : 'like 1s steps(24) forwards;',
                'born': 'born 0.5s ease-in-out forwards',
                'die': 'die 0.5s ease-in-out forwards',
                'left': 'left 0.5s ease-in-out forwards',
                'right': 'right 0.5s ease-in-out forwards',
            },
            backgroundImage: {
                'pinkClip': "url('/src/assets/images/pinkClip.png')",
                'caveBg': "url('/src/assets/images/caveBg.png')",
                'effects': "url('/src/assets/images/advantages/effects.png')",
                'quality': "url('/src/assets/images/advantages/quality.png')",
                'experience': "url('/src/assets/images/advantages/experience.png')",
                'like' : "url('/src/assets/images/likeAnim.png')",
                'appa' : "url('/src/assets/images/appa.png')",
                'banner' : "url('/src/assets/images/banner.jpg')",
            }
        },
    },
    plugins: [
    ],
};

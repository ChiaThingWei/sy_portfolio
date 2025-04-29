/** @type {import('tailwindcss').Config} */
export default {
 content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        whisper: ['Whisper', 'cursive'],
        dancing: ['Dancing Script','cursive'],
        mon: ['Monsieur La Doulaise', 'cursive'],
        play: ['Playwrite AU SA', 'cursive'],
        lavish: ['Lavishly Yours', 'cursive'],
        meow:['Meow Script','cursive'],
        
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },

    },
  },
  plugins: [],
}


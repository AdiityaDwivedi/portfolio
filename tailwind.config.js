/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Press Start 2P"', '"VT323"', 'monospace'],
        pixel: ['"VT323"', 'monospace'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        mc: {
          green: '#55AA55',
          darkgreen: '#00AA00',
          btngreen: '#4DA239',
          btngreendark: '#306922',
          btngreenlight: '#65D34B',
          sky: '#78A7FF',
          skylight: '#A6C8FF',
          cloud: '#FFFFFF',
          dirt: '#866043',
          darkdirt: '#573D26',
          grass: '#5B8C32',
          darkgrass: '#3E6120',
          stone: '#737373',
          darkstone: '#4D4D4D',
          lightstone: '#8F8F8F',
          bedrock: '#1E1E1E',
          diamond: '#4DEEEA',
          gold: '#FFAA00',
          redstone: '#FF3333',
          emerald: '#17DD62',
          lapis: '#1F4596',
          wood: '#9c6f3e',
          wooddark: '#6d4c28',
          hotbar: '#8F8F8F',
          gui: '#C6C6C6',
          guiborderdark: '#373737',
          guiborderlight: '#FFFFFF',
        }
      },
      boxShadow: {
        'mc-button': 'inset -2px -4px 0px 0px #244e19, inset 2px 2px 0px 0px #79f75e',
        'mc-button-hover': 'inset -2px -4px 0px 0px #2f6520, inset 2px 2px 0px 0px #91ff78',
        'mc-button-active': 'inset 2px 4px 0px 0px #183311, inset -2px -2px 0px 0px #79f75e',
        'mc-stone-button': 'inset -2px -4px 0px 0px #383838, inset 2px 2px 0px 0px #9E9E9E',
        'mc-stone-active': 'inset 2px 4px 0px 0px #222222, inset -2px -2px 0px 0px #9E9E9E',
        'mc-panel': 'inset -3px -3px 0px 0px #373737, inset 3px 3px 0px 0px #ffffff, inset -6px -6px 0px 0px #8B8B8B, inset 6px 6px 0px 0px #DBDBDB',
        'mc-slot': 'inset 2px 2px 0px 0px #373737, inset -2px -2px 0px 0px #ffffff',
        'mc-card': '4px 4px 0px 0px #1E1E1E',
        'mc-card-hover': '6px 6px 0px 0px #1E1E1E',
        'mc-sun': '0 0 40px rgba(255, 235, 120, 0.8)',
      },
      animation: {
        'float-slow': 'float 4s ease-in-out infinite',
        'cloud-slow': 'cloudMove 60s linear infinite',
        'cloud-medium': 'cloudMove 40s linear infinite',
        'cloud-fast': 'cloudMove 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'bob': 'bob 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        cloudMove: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(calc(100vw + 200px))' },
        }
      }
    },
  },
  plugins: [],
}

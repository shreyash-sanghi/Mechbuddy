/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend:
     {
      screens: {
        '500':'500px',
        '570':'570px',
        'sxl': '918px',
        'rmd' : {max :'768px'}
      },
      animation: {
        scroll: 'scroll 40s linear ',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
      backgroundImage: {
        'track': 'url("../src/assets/track.png")',
        'thankyou': 'url("../src/assets/thankyou.png")',
        'vendorbg': 'url("../src/assets/vendorbg.png")',
        'modificationbg': 'url("../src/assets/modificationbg.png")',
        'ticketbg': 'url("../src/assets/ticket.png")',
        'bikemodificationcoverbg': 'url("../src/assets/bikemodificationcoverbg.png")',
        'carmodificationcover': 'url("../src/assets/carmodificationcover.png")',
        'aboutbg': 'url("../src/assets/aboutbg.png")',
        'nearbyserviceprovidersbg': 'url("../src/assets/nearbyserviceprovidersbg.png")',
        'authbg': 'url("../src/assets/authbg.png")',
        'vendorplanbg': 'url("../src/assets/vendorplanbg.png")',
        'payment': 'url("../src/assets/paymentbg.png")',
        'service': 'url("../src/assets/service.png")',
        'career1': 'url("../src/assets/career1.png")',
        'contactbg': 'url("../src/assets/contactbg.png")',
        'footerbg':'url("../src/components/Footer/assets/footerbg.png")'
      },
      zIndex: {
        '100': '100',
      }

      
    },
  },

  plugins: []
}


const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          '600': '#FF2A58',
          // '600': 'rgba(255, 42, 88, 0.9)',

        },
        blue: {
          ...colors.blue,
          '100': 'whitesmoke',
          // '600': 'rgba(255, 42, 88, 0.9)',

        }
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
      },
      fontFamily: {
        'angelica': 'white_angelicaregular',
        'amiri': 'Amiri',
        'old': 'Old Standard TT',
        'quick': 'Quicksand'
      },
      width: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '256': '64rem'
      },
      height: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '1/12-h': '8.333333vh',
        '2/12-h': '16.666667vh',
        '3/12-h': '25vh',
        '4/12-h': '33.333333vh',
        '5/12-h': '41.666667vh',
        '6/12-h': '50vh',
        '7/12-h': '58.333333vh',
        '8/12-h': '66.666667vh',
        '9/12-h': '75vh',
        '10/12-h': '83.333333vh',
        '11/12-h': '91.666667vh',
        '12/12-h': '100vh',
      },
      maxWidth: {
        '1/12': '8.333333%;',
        '2/12': '16.666667%;',
        '3/12': '25%;',
        '4/12': '33.333333%;',
        '5/12': '41.666667%;',
        '6/12': '50%',
        '7/12': '58.333333%;',
        '8/12': '66.666667%;',
        '9/12': '75%',
        '10/12': '83.333333%;',
        '11/12': '91.666667%;',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      minHeight:{
        '1/3': '33.33vh',
        '2/3': '66.66vh',
        '3/3': '100vh',
        '1/4':  '25vh',
        '2/4':  '50vh',
        '3/4':  '75vh',
        '4/4':  '100vh',
        '1/12': '8.333333vh;',
        '2/12': '16.666667vh;',
        '3/12': '25vh;',
        '4/12': '33.333333vh;',
        '5/12': '41.666667vh;',
        '6/12': '50vh',
        '7/12': '58.333333vh;',
        '8/12': '66.666667vh;',
        '9/12': '75vh',
        '10/12': '83.333333vh;',
        '11/12': '91.666667vh;',
        'screen': '100vmin',
      },
      maxHeight: {
        '1/12': '8.333333%;',
        '2/12': '16.666667%;',
        '3/12': '25%;',
        '4/12': '33.333333%;',
        '5/12': '41.666667%;',
        '6/12': '50%',
        '7/12': '58.333333%;',
        '8/12': '66.666667%;',
        '9/12': '75%',
        '10/12': '83.333333%;',
        '11/12': '91.666667%;',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      inset: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-32': '-8rem',
        '-40': '-10rem',
        '-48': '-12rem',
        '-56': '-14rem',
        '-64': '-16rem',
      }
    }
  },
  variants: {},
  plugins: []
}

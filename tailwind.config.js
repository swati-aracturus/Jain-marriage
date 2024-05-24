
module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  
  theme: {
    extend: {
      screens: {
        'pxs': {'max':'322px'},
        'ps': {'max':'450px'},
        'pm': {'max':'780px'},
        'pd':  {'max':'960px'},
        'pmg':  {'max':'1025px'},
        'pg':  {'max':'1440px'},
        // => @media (min-width: 992px) { ... }
      },
    },
  },
}
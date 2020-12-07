new Vue({
    el: '#root',
    data: {
        testIf: 0,
        changeClassName: '',
        popUp:0,
        carArr: [
            'BMW', 'Audi', 'Ford', 'Mazda'
        ],
         yearArr: [
            '2016', '2017', '2018', '2019'
        ],
         colorArr: [
            'red', 'blue', 'black', 'white'
        ],
        themeColors: {
            red: 'red',
            blue: 'blue',
            orange: 'orange',
            white: 'white'

        },
        curTheme: 'white'
    },

  
})

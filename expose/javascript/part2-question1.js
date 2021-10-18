function tester() {
    /*   const discounted = [];
       const length = prices.length;
   
       for (let i = 0; i < length; i++) {
           const discountedPrice = prices[i] * (1 - discount);
           discounted.push(discountedPrice);
       }
   
       // console.log(length);
       // console.log(discountedPrice);
       // console.log(finalPrice);
   
       return discounted; */
    let student = {
        name: 'Sarah',
        major: 'CS',
        'grad': '2022',
        greeting: function () { console.log('Hello!'); },
        'favorite': {
            name: 'powell',
            course: '110'
        },
        courseload: ['110', '101', '109']
    };

    console.log(student.courseload[1]);

}

tester();
//discountPrices([100, 200, 300], 0.5);
import React from 'react';

class Article1 extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            title : 'India win thriller, eliminate England in race to WTC final ',
            imageUrl : 'https://www.cricket.com.au/~/-/media/News/2017/02/14India-squad.ashx?w=1600',
            content : 'After a day in which wickets fell in a flurry, India emerged victorious to boost their chances of cementing a place in the ICC World Test Championship final, even as they eliminated England from the race.Axar Patel claimed 11 wickets in the match and R Ashwin became only the fourth Indian to reach 400 Test wickets as India bundled England out for 81 in their second innings, giving themselves a target of 49. Rohit Sharma brought up the winning runs with a six as the hosts wrapped up victory within two days.',
        }
    }

    render() {
        return (
          console.log("testing")
        )
    }

}

export default Article1;

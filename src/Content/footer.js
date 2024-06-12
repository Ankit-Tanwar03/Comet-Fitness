import Logo from "../assets/logo/Logo.png";
import facebook from "../assets/footer/facebook.svg"
import instagram from "../assets/footer/instagram.svg"
import twitter from "../assets/footer/twitter.svg"
import threads from "../assets/footer/threads.svg"
export const footer = {
    col1Data: [{
        image: `${Logo}`
    },{
        title: "Comet Fitness"
    }],

    col2Data:[{
        description: "Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals."
    },{
        images: [`${facebook}`,`${instagram}`,`${twitter}`,`${threads}`]
    },
    {
        description:"© 2024 Comet Fitness"
    }],

    col3Data:[
        {
            title: "Information",
            list:["Comet Network","Work","News","Timetable", "Find Gym"]
        }
    ],

    col4Data:[
        {
            title: "Working Hours",
            list:["Monday-Friday:","06:00 AM - 11:00 PM","Saturday-Sunday:","08:00 AM - 08:00 PM", "National Holidays:", "Closed"]
        }
    ],

    col5Data:[
        {
            title: "Services",
            list:["Offer for Companies","Tickets for you","Advertising in clubs","Find a club", "Privacy Policy", "Disclaimer", "Cokkie Settings"]
        }
    ],

    
}
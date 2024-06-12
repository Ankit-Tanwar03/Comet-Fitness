import Progress from "../assets/home/gymCards/Progress.svg"
import Workout from "../assets/home/gymCards/Workout.svg"
import Nutrition from "../assets/home/gymCards/Nutrition.svg"
import Training from "../assets/home/chooseUs/Training.png"
import Equipment from "../assets/home/chooseUs/Equipment.png"
import Bag from "../assets/home/chooseUs/Bag.png"
import Water from "../assets/home/chooseUs/Water.png"
import TrainerM1 from "../assets/home/trainer/TrainerM1.jpg"
import TrainerM2 from "../assets/home/trainer/TrainerM2.jpg"
import TrainerF1 from "../assets/home/trainer/TrainerF1.jpg"
import TrainerF2 from "../assets/home/trainer/TrainerF2.jpg"
import logo1 from "../assets/home/trainer/logo1.png"
import logo2 from "../assets/home/trainer/logo2.png"
import logo3 from "../assets/home/trainer/logo3.png"
import logo4 from "../assets/home/trainer/logo4.png"
import logo5 from "../assets/home/trainer/logo5.png"
import Yoga from "../assets/home/news/Yoga.jpg"
import Crossfit from "../assets/home/news/Crossfit.jpg"
import Grace from "../assets/home/news/Grace.jpg"
import Plans from "../assets/home/news/Plans.jpg"

export const hero = {
    title:"Comet Fitness",
    description: "Reach your fitness goals with Comet Fitness, the cutting-edge gym that inspires you to push your limits. Join our community of driven individuals and transform your body and mind."
}

export const gymCards = {
    cards:[{
        image:`${Progress}`,
        title:"Progession",
        description:"Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."
    },{
        image:`${Workout}`,
        title:"Workout",
        description:"With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
    },{
        image:`${Nutrition}`,
        title:"Nutrition",
        description:"Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
    }]
}

export const chooseUs = {
    title:"We Can Give A Shape Of Your Body Here!",
    subtitle:"Why Choose Us",
    description:"At Comet, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.",
    cards:[{
        image:`${Training}`,
        title:"1st Session Free"
    },{
        image:`${Equipment}`,
        title:"Modern Gym Equipments"
    },{
        image:`${Bag}`,
        title:"Gym Bag Equipments"
    },{
        image:`${Water}`,
        title:"Variety of Supplements"
    }]
}

export const trainers = {
    title:"Team Of Expert Coaches",
    subtitle:"Gym Trainers",
    description:"Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!",
    cards:[{
        image:`${TrainerM1}`,
        name:"Gary Gabler",
        designation:"Crossfit Trainer"
    },{
        image:`${TrainerM2}`,
        name:"Mark Hales",
        designation:"Personal Trainer"
    },{
        image:`${TrainerF1}`,
        name:"Alice Smith",
        designation:"Endurance Specialist"
    },{
        image:`${TrainerF2}`,
        name:"Sara Maxwell",
        designation:"Personal Trainer"
    }],
    logos:[{
        image:`${logo1}`
    },{
        image:`${logo2}`
    },{
        image:`${logo3}`
    },{
        image:`${logo4}`
    },{
        image:`${logo5}`
    }]
}

export const pricing = {
    title:"Exclusive Pricing Plan",
    subtitle:"Our Prices",
    description:"Choose a mix of benefits with our subscription.",
    cards:[{
        title:"Beginner",
        heading:`Pricing`,
        price:"25",
        benefits:["Access to Gymanisum", "Access to Crossfit Room", "Access to Boxing Room", "Access to Sauna and Solarium", "Free 1 session with trainer per month", ]
    },{
        title:"Intermediate",
        heading:`Pricing`,
        price:"45",
        benefits:["Access to Gymanisum", "Access to Crossfit Room", "Access to Boxing Room", "Access to Sauna and Solarium", "Free 5 session with trainer per month", "Help in diet and Nutrition Planning" ]
    },{
        title:"Advance",
        heading:`Pricing`,
        price:"65",
        benefits:["Access to Gymanisum", "Access to Crossfit Room", "Access to Boxing Room", "Access to Sauna and Solarium", "Free 10 sessions with personalised trainer per month", "Help in diet and Nutrition Planning", "Discounts on supplements"]
    }],
}

export const news = {
    title: "Our Recent News",
    subtitle: "Latest News",
    description: "Follow latest news from Comet Fitness",
  
    getFormattedDate: function (daysBack) {
      const date = new Date();
      date.setDate(date.getDate() - daysBack);
  
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
  
      return `${day}.${month}.${year}`;
    },
  
    getDates: function () {
      const twoDaysBack = this.getFormattedDate(2);
      const fiveDaysBack = this.getFormattedDate(5);
      const tenDaysBack = this.getFormattedDate(10);
      const twelveDaysBack = this.getFormattedDate(12);
  
      return {
        twoDaysBack,
        fiveDaysBack,
        tenDaysBack,
        twelveDaysBack,
      };
    },
  
    cards: []
  };
  
  const dates = news.getDates();
  news.cards = [
    { image: `${Yoga}`, 
      date: dates.twoDaysBack,
      title: "Yoga For Everyone in 2024",
      content: "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds."
    },
    { image: `${Crossfit}`,
      date: dates.fiveDaysBack,
      title: "Getting Back Into CrossFit",
      content: "Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success"
    },
    { image: `${Grace}`,
      date: dates.tenDaysBack,
      title: "Meet Fitness Model Lisa",
      content: "Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
    },
    { image: `${Plans}`,
      date: dates.twelveDaysBack,
      title: "New Training Plans",
      content: "From next month we are offering new plans wich are designed keeping your needs in mind. You can fond details of it the Pricing section of our website"
    }
  ];
  
  
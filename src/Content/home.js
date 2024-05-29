import Progress from "../assets/home/gymCards/Progress.svg"
import Workout from "../assets/home/gymCards/Workout.svg"
import Nutrition from "../assets/home/gymCards/Nutrition.svg"
import Training from "../assets/home/chooseUs/Training.png"
import Equipment from "../assets/home/chooseUs/Equipment.png"
import Bag from "../assets/home/chooseUs/Bag.png"
import Water from "../assets/home/chooseUs/Water.png"

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
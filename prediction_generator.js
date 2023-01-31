// Prediction generator for astrological signs

// All the prections:
let pred1 = "Things are looking real bright, you will meet the person that will become the sunshine in your life."
let pred2 = "Cloudy day, you will be the subject of much shade from people close to you."
let pred3 = "You have a great deal of unused capacity, which you have not turned to your advantage."
let pred4 = "Disciplined and self-controlled outside, you tend to be worrisome and insecure inside."
let pred5 = "Today is the day to YEET!"
let pred6 = "You will feel particularly critical of yourself today."
let pred7 = "Hmm, maybe consider being of a different astrological sign."
let pred8 = "Watch where you step, the grass may seem green, but the neighbors don't pick up after their dog."

let prediction = '';

const dailyPrediction = () => {
    let randNum = Math.floor(Math.random() * 8);
    switch (randNum) {
        case 0:
            return pred1;
            break;
        case 1:
            return pred2;
            break;
        case 2:
            return pred3;
            break;
        case 3:
            return pred4;
            break;
        case 4:
            return pred5;
            break;
        case 5:
            return pred6;
            break;
        case 6:
            return pred7;
            break;
        case 7:
            return pred8;
            break;
    }
}

const givePrediction = (prediction) => {
    return console.log(`Today's prediction: \n${prediction}`);
}

prediction = dailyPrediction();
//console.log(prediction);
givePrediction(prediction);
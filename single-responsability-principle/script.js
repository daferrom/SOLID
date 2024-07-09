
import { logMessage } from "../single-responsability-principle/logger/logger"

class CaloriesTracker {

// A class must do one thing and only should have one reason to change //

/* Only a change in the software specification (Logic DB, registry logic, etc) should affect the specification on the class
*/
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
        logMessage.bind()
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories) {
            logMessage("Max calories exceed fat boy")
        }
    }
    // Instead of having the method that handle the logs inside this class , the module isolated as a separeted module bringing to the calorieTracker only one reason to change and no moe one than it //
    // logCalorieSurplus() {
    //     console.log("Max calories exceed fat boy")
    // }
}

const calorieTracker = new CaloriesTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

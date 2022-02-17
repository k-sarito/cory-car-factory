const createChassis = () => {
    const newChassisObject = {

    }
    return newChassisObject
}

const chassis = createChassis()
// console.log(chassis) 

const addBody = (object) => {
    object.body = "Fever"
    return object
}

const body = addBody(chassis)
//console.log(chassis)

const addWheels= (object) => {
    object.wheels = 4
    return object
}

const wheels = addWheels(chassis)
// console.log(wheels)

const addEngine = (object) => {
    object.engine = "4.8L"
    return object
}

const engine = addEngine(chassis)
// console.log(engine)

const addSteeringWheel = (object) => {
    object.steeringWheel = "Tilting"
    return object
}

const steeringWheel = addSteeringWheel(chassis)
// console.log(steeringWheel)

const addDriveTrain = (object) => {
    object.driveTrain = "Two Wheel Drive"
    return object
}

const driveTrain = addDriveTrain(chassis)
console.log(driveTrain)


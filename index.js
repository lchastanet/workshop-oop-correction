import Car from "./Car.js"
import Motorcycle from "./Motorcycle.js"

const smart = new Car("Red", "Smart", 4)
const suzuki = new Motorcycle("Green", "Ninja", 2)

smart.logTypeAndProps()
suzuki.logTypeAndProps()

smart.lockDoors()

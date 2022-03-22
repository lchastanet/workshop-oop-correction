import Vehicle from "./Vehicle.js"

class Car extends Vehicle {
  constructor(color, name, numberOfWheels) {
    super(color, name, numberOfWheels)
  }

  lockDoors() {
    console.log("You are safe now")
  }

  //   logTypeAndProps() {
  //     console.log(`Car specs : ${this.getPropsString()}`)
  //   }
}

export default Car

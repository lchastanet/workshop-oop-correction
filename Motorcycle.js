import Vehicle from "./Vehicle.js"

class Motorcycle extends Vehicle {
  constructor(color, name, numberOfWheels) {
    super(color, name, numberOfWheels)
  }

  //   logTypeAndProps() {
  //     console.log(`Motorcycle specs : ${this.getPropsString()}`)
  //   }
}

export default Motorcycle

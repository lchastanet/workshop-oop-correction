class Vehicle {
  constructor(color, name, numberOfWheels) {
    this.color = color
    this.name = name
    this.numberOfWheels = numberOfWheels
  }

  getPropsString() {
    return Object.keys(this)
      .map((key) => `${key} has a value of ${this[key]}`)
      .join(", ")
  }

  logTypeAndProps() {
    console.log(`${this.constructor.name} specs : ${this.getPropsString()}`)
  }
}

export default Vehicle

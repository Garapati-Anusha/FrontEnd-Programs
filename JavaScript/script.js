const car = {
    model: "Mahindra",
    year : 2023,
    color: "Red",
    design: "",
    get mod() {
        return this.model.toUpperCase();
      },
   
    set des(des) {
        this.design = des;
    }
    
}

car.design = "SUV"

document.getElementById("demo1").innerHTML = car.mod;
document.getElementById("demo2").innerHTML = car.design;
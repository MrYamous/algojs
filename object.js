let student = {
    name: "Mathieu",
    favoriteFood: "Tiramisu",
    city: "Aix"
}

let values = Object.values(student)
let nombreDeLettres = 0

values.forEach((value) => {
    nombreDeLettres += value.length
})

if (nombreDeLettres % 2 === 0) {
    console.log("pair")
} else {
    console.log("impair")
}
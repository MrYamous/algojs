let a = "Jean"
let b = "Paul"
let result = checkName(a, b)

function checkName(prenom1, prenom2) {
    if (prenom1 === prenom2) {
        return "Les deux prénoms sont identiques"
    } else {
        return "Les deux prénoms ne sont pas identiques"
    }
}

console.log(result)


// 

let student = {
    firstname: "Matthieu",
    favoriteFood: "Tiramisu",
    city: "Aix"
}

let values = Object.values(student)
let result = 0

values.forEach((value) => {
    result += value.length
})

if(result % 2 == 1) {
    console.log("impair")
} else {
    console.log("pair")
}

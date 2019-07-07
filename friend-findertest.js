var friends = [
    {
        name: "danny",
        keyscores: [2, 3, 4, 5, 1]
    },
    {
        name: "ken",
        keyscores: [5, 5, 5, 5, 5]
    },
    {
        name: "chad",
        keyscores: [1, 1, 1, 1, 1]
    }
]


var submittedScores = [2, 3, 2, 2, 5]
var bestMatch = {
    name: '',
    // submittedScores = [5,5,5,5,5],
    difference: 100
};

console.log(submittedScores.reduce((acc, cur) => acc + cur))
console.log(submittedScores.map(e => e * 2))


for (scores of submittedScores) {
    console.log(scores)
}

//for in example obj
for (keys in bestMatch) {
    console.log(bestMatch[keys])
}


//absolute difference 3-5 = 2 or 5-3 = 2 must remain positive

// friends object that contains friends and scores
//each friend has a different from the others as well the keyscores

// takes submitted scores and compare to keyscores

// var submittedScores = [1,5,5,5,5]


for (var i = 0; i < friends.length; i++) {
    var difference = 0;
    for (var j = 0; j < friends[i].keyscores.length; j++) {
        console.log(Math.abs(friends[i].keyscores[j] - submittedScores[j]))
        difference = difference + Math.abs(friends[i].keyscores[j] - submittedScores[j])
        console.log(difference)
        if (j === friends[i].keyscores.length - 1) {
            if (bestMatch.difference > difference) {
                bestMatch.difference = difference
                bestMatch.name = friends[i].name
            }
        }
    }
}
console.log(bestMatch)
console.log(difference)

//First example 

function d(a) {
    console.log(a * 2);
}

function a(b, c, d) {
    setTimeout(function () {
        var e = b + c;
        d(e);
        console.log("se ha ejecutado la functiona a");

    }, 1000)

}

a(4, 5, d);

//second example 

var person = [{
        name: "Bugs",
        age: 24,
        weight: 90,
    },
    {
        name: "Tweety",
        age: 22,
        weight: 120,
    },
    {
        name: "Lola",
        age: 21,
        weight: 50,
    },
    {
        name: "Daffy",
        age: 20,
        weight: 60,
    },
    {
        name: "Porky",
        age: 34,
        weight: 200,
    },
]


function iter(person, callback) {
    for (var i = 0; i < person.length; i++) {
        callback(person[i]);
    }
    

}
// I use callback for display persons who have less or equal 24 years
iter(person, function (cal) {
    if (cal.age <= 24) {
        console.log(cal.name);
    }

})
//example for count weight and get number of persons of persons in this case we take only 5 
var ntest = function (callback) {
    var totalAge = 0,
        totalCount = 0;
    iter(person, function (cal) {
        totalAge += cal.age;
        totalCount++;
    })
    callback(totalCount, totalAge);

}
//example for counting medium of the age of 5 people
ntest(function (a, b) {
    console.log(a, "counter");
    console.log(b, "total age");
    console.log(b / a, "average of age");

});
// array with callback
function putArray(cal) {

    var arr = [];
    iter(person, function (call) {
        if (call.age < 24 && call.weight < 100) {
            arr.push(call.name);

        }
    })
    cal(arr);
}

putArray(function (person) {
    console.log(person);
});
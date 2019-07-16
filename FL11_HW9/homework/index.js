// Task 0

const getNumbers = input => {
    let resultArr = [];
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            resultArr.push(input[i]);
        }
    }
    return resultArr;
}
getNumbers('n1um3ber95');




// Task 1
const findTypes = function() {

    const argLength = arguments.length;
    let dataType;


    let typesCount = {
        objectCount: 0,
        numberCount: 0,
        stringCount: 0,
        booleanCount: 0,
        nullCount: 0,
        undefinedCount: 0

    }
    let response = [];
    for (let i = 0; i < argLength; i++) {
        dataType = typeof arguments[i];
        response[dataType] = 0;

        switch (dataType) {
            case 'object':
                typesCount.objectCount += 1;
                break;

            case 'number':
                typesCount.numberCount += 1;
                break

            case 'string':
                typesCount.stringCount += 1;
                break

            case 'boolean':
                typesCount.booleanCount += 1;
                break

            case 'undefined':
                typesCount.undefinedCount += 1;
                break
        }
    }

    for (let keys in response) {
        response[keys] = typesCount[keys + 'Count'];
    }
    return response;
}

findTypes(null, 5, 'hello', 'hello', true, false, {}, 'yo');




// Task 2


function executeForEach(arr, callback) {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        callback(arr[i], i);
    }
}

executeForEach([1, 2, 3, 'heyho'], function(el) {
    console.log(el);
});


// Task 3

const mapArray = (arr, callback) => {

    executeForEach(arr, function(el, pos) {
        arr[pos] = callback(el);
    });

    return arr;
};


mapArray([2, 5, 8], function(el) {
return el + 3
}) // returns [5, 8, 11]



// Task 4


const filterArray = (arr, callback) => {
    let resultArr = [];
    executeForEach(arr, function(el) {
        if (callback(el)) {
            resultArr.push(el);
        }

    });

    return resultArr;
}

filterArray([2, 5, 8], function(el) {
    return el > 3
})



// Task 5
let showFormattedDate = dateInput => {
    let month = dateInput.getMonth();
    const date = dateInput.getDate();
    const year = dateInput.getFullYear();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const arrLength = months.length;


    for (let i = 0; i < arrLength; i++) {
        if (month === i) {
            month = months[i];
        }
    }


    return `Date: ${month} ${date} ${year}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));







// Task 6

const canConvertToDate = input => {

    let isDate = Date.parse(input);
    if (isNaN(isDate)) {
        return false
    }
    return true

}
canConvertToDate('2016-13-18T00:00:00') // false
canConvertToDate('2016-03-18T00:00:00') // true




// Task 7

const daysBetween = (date1, date2) => {
    date1 = date1.getTime();
    date2 = date2.getTime();
    let millisecondsInDay = 1000 * 60 * 60 * 24;
    let delta = (date2 - date1) / millisecondsInDay;
    delta = Math.round(delta);


    return delta;

}


daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')) // 32



// Task 8
let humanData = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]

const getAmountOfAdultPeople = data => {
    const arrLength = data.length;
    let counter = 0;
    for (let i = 0; i < arrLength; i++) {
        let currentDate = new Date();


        let param1 = new Date(data[i][' birthday ']);
        let delta = daysBetween(param1, currentDate);

        delta = delta / 365;
        if (delta >= 18) {
            counter += 1;
        }
    }

    return counter;

}

getAmountOfAdultPeople(humanData) // returns 3;



// Task 9
const keys = arr => {
    const arrResult = [];
    for (let keys in arr) {
        arrResult.push(keys);
    }

    return arrResult
}

keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }) // returns [“keyOne”, “keyTwo”, “keyThree”]


// Task 10

const values = arr => {
    const arrResult = [];
    for (let keys in arr) {
        arrResult.push(arr[keys]);
    }

    return arrResult;
}


values({ keyOne: 1, keyTwo: 2, keyThree: 3 }) // returns [1, 2, 3]
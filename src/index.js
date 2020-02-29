module.exports = function toReadable(number) {
    let words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty"
    ];
    if (number < 21) {
        return words[number];
    }
    let array = number.toString().split("");
    let final = "";
    let res1;
    let res2;
    let res3;
    function hundreds(num) {
        let hundred = `${words[num]}` + " " + "hundred";
        return hundred;
    }
    function dozens(num) {
        let dozen = "";
        if (num == 1) {
            dozen = "ten";
        }
        if (num == 2) {
            dozen = "twenty";
        }
        if (num == 3) {
            dozen = "thirty";
        }
        if (num == 4) {
            dozen = "forty";
        }
        if (num == 5) {
            dozen = "fifty";
        }
        if (num == 6) {
            dozen = "sixty";
        }
        if (num == 7) {
            dozen = "seventy";
        }
        if (num == 8) {
            dozen = "eighty";
        }
        if (num == 9) {
            dozen = "ninety";
        }
        return dozen;
    }
    function units(num) {
        return words[num];
    }
    if (number < 100) {
        if (number % 10 === 0) {
            res1 = dozens(array[0]);
            return res1;
        } else {
            res2 = dozens(array[0]);
            res1 = units(array[1]);
            final = res2 + " " + res1;
            return final;
        }
    }
    if (number < 1000) {
        if (number % 100 === 0) {
            res1 = hundreds(array[0]);
            return res1;
        }
        if (number % 10 === 0) {
            res1 = hundreds(array[0]);
            res2 = dozens(array[1]);
            final = `${res1} ${res2}`;
            return final;
        }
        if (array[1] === "0") {
            res1 = hundreds(array[0]);
            res2 = units(array[2]);
            final = `${res1} ${res2}`;
            return final;
        }
        if (array[1] === "1") {
            res1 = hundreds(array[0]);
            res2 = words[+array[2] + 10];
            final = `${res1} ${res2}`;
            return final;
        } else res1 = units(array[2]);
        res2 = dozens(array[1]);
        res3 = hundreds(array[0]);
        final = `${res3} ${res2} ${res1}`;
        return final;
        {
        }
    }
};

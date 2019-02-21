var calculateTip = function(bill){
    if (bill < 50){
        return bill * 0.2;
    }else if (bill >= 50 && bill <= 200){
        return bill * 0.15;
    }else if (bill > 200){
        return bill * 0.10;
    }
}

var Tip1 = calculateTip(124);
var Tip2 = calculateTip(48);
var Tip3 = calculateTip(268);


//1.An array that contain all the tips

var allTips = console.log([Tip1, Tip2, Tip3]);

//2. An Array that contain all payments

var Bills = [124, 48, 268];
var allPaid = console.log([(Tip1 + Bills[0]), (Tip2 + Bills[1]), (Tip3 + Bills[2])]);

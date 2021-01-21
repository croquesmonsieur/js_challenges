/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("run").addEventListener("click", function(){
        let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let i = 0;
        for (i=0; i<=0; i++){
        let time = new Date(document.getElementById("year").value, 0, 13);
            console.log(time);
            let to_date = time.getDate();
            let to_day = days[time.getDay()];
            let to_month = months[time.getMonth()];
            console.log(to_date);
            console.log(to_day);
            console.log(to_month);
            if (to_day === "Friday"){
                alert(to_month);
            }
//month february
            time = new Date(document.getElementById("year").value, 1, 13);
            let to_day1 = days[time.getDay()];
            let to_month1 = months[time.getMonth()];
            console.log(time);
            console.log(to_day1);
                if (to_day1 === "Friday"){
                    alert(to_month1);
                }
//month march
            time = new Date(document.getElementById("year").value, 2, 13);
            let to_day2 = days[time.getDay()];
            let to_month2 = months[time.getMonth()];
            console.log(time);
            console.log(to_day2);
            if (to_day2 === "Friday"){
                alert(to_month2);
            }

            time = new Date(document.getElementById("year").value, 3, 13);
            let to_day3 = days[time.getDay()];
            let to_month3 = months[time.getMonth()];
            console.log(time);
            console.log(to_day3);
            if (to_day3 === "Friday"){
                alert(to_month3);
            }

            time = new Date(document.getElementById("year").value, 4, 13);
            let to_day4 = days[time.getDay()];
            let to_month4 = months[time.getMonth()];
            console.log(time);
            if (to_day4 === "Friday"){
                alert(to_month4);
            }

            time = new Date(document.getElementById("year").value, 5, 13);
            let to_day5 = days[time.getDay()];
            let to_month5 = months[time.getMonth()];
            console.log(time);
            if (to_day5 === "Friday"){
                alert(to_month5);
            }

            time = new Date(document.getElementById("year").value, 6, 13);
            let to_day6 = days[time.getDay()];
            let to_month6 = months[time.getMonth()];
            console.log(time);
            if (to_day6 === "Friday"){
                alert(to_month6);
            }

            time = new Date(document.getElementById("year").value, 7, 13);
            let to_day7 = days[time.getDay()];
            let to_month7 = months[time.getMonth()];
            console.log(time);
            if (to_day7 === "Friday"){
                alert(to_month7);
            }

            time = new Date(document.getElementById("year").value, 8, 13);
            let to_day8 = days[time.getDay()];
            let to_month8 = months[time.getMonth()];
            console.log(time);
            if (to_day8 === "Friday"){
                alert(to_month8);
            }

            time = new Date(document.getElementById("year").value, 9, 13);
            let to_day9 = days[time.getDay()];
            let to_month9 = months[time.getMonth()];
            console.log(time);
            if (to_day9 === "Friday"){
                alert(to_month9);
            }

            time = new Date(document.getElementById("year").value, 10, 13);
            let to_day10 = days[time.getDay()];
            let to_month10 = months[time.getMonth()];
            console.log(time);
            if (to_day10 === "Friday"){
                alert(to_month10);
            }

            time = new Date(document.getElementById("year").value, 11, 13);
            let to_day11 = days[time.getDay()];
            let to_month11 = months[time.getMonth()];
            console.log(time);
            if (to_day11 === "Friday"){
                alert(to_month11);
            }


        }

       /* switch (time){
            case 0:
                new Date(document.getElementById("year").value, 0, 13);
                to_date = time.getDate();
                to_day = days[time.getDay()];
                console.log(to_date);
                if (to_day === "Friday"){
                    alert(to_month);
                    break;
                }
            case 1:
                new Date(document.getElementById("year").value, 1, 13);
                if (to_day === "Friday") {
                    alert(to_month);
                    break;
                }
        }*/
/*
        months.forEach (find);
        function find(){

            if (to_date === 13 && to_day === "Friday"){
                alert(to_month);
            } else {

            }
        }*/
    })


/*
    function other_year(month, year) {
        let input_year = document.getElementById("year").value;
        return new Date(year, month, 0).getDate();
    }

    console.log(other_year(2, 2002));

    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function index(){
        let count = months.indexOf("january", 0);
    }

    console.log(index());

    /*let year = new Date();
    document.getElementById("year").value = year.getFullYear();

    console.log(year);

    let input_year = document.getElementById("year").value;
    function other_year(month, year){
        let input_year = document.getElementById("year").value;
        return new Date(year, month, 0).getDate();
        let years = new Date();

    }

    console.log(other_year(2, 2004));


    /*let day = new Date();

    let arr_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = arr_days[.getDay()];
    console.log(today);

    /*

    function an_year(){
        let date = new Date();
        let days = date.getDate();
        let year = document.getElementById("year").value;

    }

    console.log(an_year)


    /*
    let year = new Date();
    let input_year = document.getElementById("year").value;
    year = input_year.getMonth();
    console.log(year);
    */

    //let day = time.getDate();
    //let month = time.getMonth();
    //let year = time.getFullYear();
    //let arr_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //let today = arr_days[time.getDay()];
    // your code here

})();

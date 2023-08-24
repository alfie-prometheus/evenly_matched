//get the values from the Page
//starts or controller function
function getValues(){
    //get values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //Validate input
    //Parse into integer)
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);     

    }else{
        alert("You must enter integers.");
    }


}

//generate numbers from startvalue to the endvalue
//logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    //get all numbers from the start to the end
    for (let i = sValue; i <= eValue; i++) {

        //this will execute until the i(index) gets the eValue
        numbers.push(i);
        
    }

    return numbers;

}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers){

    let templateRows="";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}


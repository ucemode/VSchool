
    for (let i = 0; i <= 100; i++) {
        let flex = "";
        if(i % 3 === 0){
            // console.log("fizz")
            flex += "fizz";
        }
        else if (i % 5 === 0){
            flex += "buzz";
        }
        else if (i % 3 === 0 && i % 5 === 0){
            flex += "fizzbuzz";
        }
        else 
        flex = i 
        console.log(flex)
    }


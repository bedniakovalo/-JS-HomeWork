 // var age = prompt("Будь ласка, введіть ваш вік:","");
        // if (age ) {
        //     alert("Вам " + age + " рік");
        // } else if (2<=age<=4) {
        //     alert("Вам " + age + " роки");
        // } else if () {
        //     alert("Вам " + age + " років");
        // } else {
        //     alert("Ви ввели не вік. Спробуйте ще");
        // }

        var age = prompt("Будь ласка, введіть ваш вік:", "");

        if (age !== null && age > 0 && age !== undefined && age !== NaN) {
           let ageCheck = age.toString();
            if (ageCheck.endsWith("1") && !ageCheck.endsWith("11")) {
                alert("Вам " + age + " рік");
            } else if (ageCheck.endsWith("2") || ageCheck.endsWith("3") || ageCheck.endsWith("4")) {
                alert("Вам " + age + " роки");
            } else {
                alert("Вам " + age + " років");
            } 
        } else {
            alert("Ви не ввели вік. Спробуйте ще");
        }
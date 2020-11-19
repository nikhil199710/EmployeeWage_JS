
//UC4-Monthly Wage
    const NUM_OF_WORKING_DAYS=20;
    for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
    {
        let empCheck=Math.floor(Math.random()*10)%3;
        empHrs+=getWorkingHrs(empCheck);
    }
    empWage=empHrs*WAGE_PER_HR;
    console.log("Total Hrs: "+empHrs+" Emp Wage "+empWage);

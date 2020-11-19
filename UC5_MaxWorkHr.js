

//UC5-Maximum Working Hour

	const MAX_HRS_IN_MONTH=160;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        empCheck=Math.floor(Math.random()*10)%3;
        totalEmpHrs+=getWorkingHrs(empCheck);
    }
        empWage=totalEmpHrs*WAGE_PER_HR;
        console.log("total Days:"+totalWorkingDays+"Total Hrs: "+totalEmpHrs+" Emp Wage "+empWage);

//UC8-Map
{
    const MAX_HRS_IN_MONTH=100;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageMap = new Map(); 
    let empDailyHourMap=new Map();
    const WAGE_PER_HOUR=20;

    function calcDailyWage(empHrs) 
    {
        return empHrs * WAGE_PER_HOUR; 
    }    
    while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
    { 
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3; 
        let empHrs = getWorkingHours(empCheck); 
        totalEmpHrs += empHrs; 
        empDailyWageArr.push(calcDailyWage(empHrs)); 
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
        empDailyHourMap.set(totalWorkingDays,empHrs); 
        totalEmpWage=getWorkingHours(totalEmpHrs);
    }
    
    function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage; 
    }
    console.log("Map---> Displaying TotalHrs with the help of map: "+Array.from(empDailyWageMap.values()).reduce(totalWages));
}

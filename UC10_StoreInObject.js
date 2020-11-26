   
//UC 10 object creation
    {
        const MAX_HRS_IN_MONTH=100;
        let totalEmpHrs=0;
        let totalWorkingDays=0;
        let empDailyWageAndHrArray=new Array();
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
            empDailyWageAndHrArray.push(
            {
                dayNumb:totalWorkingDays,
                dailyHr:empHrs,
                dailyWage:calcDailyWage(empHrs),
                
                toString(){
                    return '\nDay:'+this.dayNumb+'\t=>'+'\tDailyWage:'+this.dailyWage+'\tDailyHours:'+this.dailyHr;
                },

            });
        }
        console.log("UC 10 showing daily hours worked and wage using object "+empDailyWageAndHrArray);
    

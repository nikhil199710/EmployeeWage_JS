
//UC3-Employee Working hours

//Refactor
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HRS=4;
    const FULL_TIME_HRS=8;
    const WAGE_PER_HR=20;

    let empHrs=0;

    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HRS;
            case IS_FULL_TIME:
                return FULL_TIME_HRS;
            default:
                return 0;
        }
    }
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHrs(empCheck);
    let empWage=empHrs*WAGE_PER_HR;
    console.log("empWage"+empWage);
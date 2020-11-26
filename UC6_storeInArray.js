
//UC 6-Store it in array,the the daily employee wage
{
	const MAX_HRS_IN_MONTH=100;
	const NUM_OF_WORKING_DAYS=20;
	let totalEmpHrs=0;
	let totalWorkingDays=0;
	let empDailyWageArr=new Array();

	function calculateDailyWage(empHrs)
	{
		return empHrs*WAGE_PER_HR;
	}

	while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
	{
		totalWorkingDays++;
		let empCheck=Math.floor(Math.random()*10)%3;
		let empHrs=getWorkingHrs(empCheck);
		totalEmpHrs+=empHrs;
		empDailyWageArr.push(calculateDailyWage(empHrs));
	}
    let empWage=calculateDailyWage(totalEmpHrs);
    console.log("Started with UC 6");
	for(let s of empDailyWageArr)
	{
		console.log("Daily Wage: "+s);
	}
	console.log("totalDays:"+totalWorkingDays+" TotalHrs:"+totalEmpHrs+" TotalEmpWage:"+empWage);

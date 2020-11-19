//UC1-Employee Status-Present/Absent
{
    const IS_ABSENT=0;
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck==IS_ABSENT)
    {
        console.log("Employee absent");
    }
    else
    {
        console.log("Employee present");
    }
}

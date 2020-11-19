
{
    // UC 12 extension of employee payroll class, add startDate and gender.

    class EmployeePayrollData 
    {
        // property
        id; 
        salary; 
        gender;
        startDate;

       // constructor
        constructor(...params) 
       { 
            this.id = params[0]; 
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        } 

       // getter and setter method 
       get name() { return this._name; } 
       set name(name) { 
           console.log("Setting name "+name);
       this._name = name; 
       } 
       
       // method 
       toString() {
           const options={year:'numeric',month:'numeric',day:'numeric'};
           const empDate=this.startDate===undefined?"undefined":this.startDate.toLocaleDateString("pt-BR",options);
            return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary+ ", gender=" + this.gender+ ", startDate=" + empDate; 
        } 
    }
        let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000); 
        console.log("UC-11 Extension of Employee PayRoll "+employeePayrollData.toString());
        employeePayrollData.name = "john"; 
        console.log(employeePayrollData.toString()); 
        let newEmployeePayrollData = new EmployeePayrollData(2, "Sindhu", 40000,'F',new Date()); 
        console.log(newEmployeePayrollData.toString()); 
}

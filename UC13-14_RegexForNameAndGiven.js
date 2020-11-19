
{
    // UC 13 Use Regex for Name and throw error 

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
       let checkName=RegExp('^[A-Z]{1}[a-z]{3,}$');
           if(checkName.test(name))
           {
                this._name=name;
           }
           else
           {
                throw "InCorrect name";
           }
           
       this._name = name; 
       } 
       
       // method 
       toString() 
       {
            return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary+ ", gender=" + this.gender+ ", startDate=" + this.startDate; 
        } 
    }
        let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000); 
        console.log("UC-11 Regular expressions "+employeePayrollData.toString());
        try
        {
            employeePayrollData.name = "John"; 
            console.log("Setting name "+employeePayrollData.name );
        }
        catch(e)
        {
            console.error(e);
        }
        console.log(employeePayrollData.toString()); 
        let newEmployeePayrollData = new EmployeePayrollData(2, "Sindhu", 40000,'F',new Date()); 
        console.log(newEmployeePayrollData.toString()); 
}
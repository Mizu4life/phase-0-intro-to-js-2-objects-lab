// Write your solution in this file!
let employee = {name:'Sam', streetAddress:'12 October'};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let new_employee={...employee};
    new_employee[key]=value;
    return new_employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let new_employee={...employee};
    delete new_employee[key];
    return new_employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

// Write your solution in this file!
const employee = {
    name: "employeeName",
    streetAddress: "employeeAddress"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
    //Can I use new employee, or do I need another constant?//
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
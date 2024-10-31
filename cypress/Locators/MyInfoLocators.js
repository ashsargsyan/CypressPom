const MyInfoLocators = {
    myInfo: 'span:contains(My Info)',
    firstname: 'input[name=firstName]',
    middlename: 'input[name=middleName]',
    lastname: 'input[name=lastName]',
    employeeId: '.oxd-label:contains(Employee Id)',
    otherId: '.oxd-label:contains(Other Id)',
    driverLicense: '.oxd-label:contains(Driver)',
    licenseExpireDate: '.oxd-label:contains(License Expiry)',
    closeCalendar: '.oxd-date-input-link:contains(Close)',
    nationality: '.oxd-label:contains(Nationality)',
    nationalityList: '[role="listbox"]',
    selectNationality: '.oxd-select-option:contains(Armenian)',
    maritalStatus: '.oxd-label:contains(Marital)',
    selectMaritalStatus: '.oxd-select-option:contains(Married)',
    birthDate: '.oxd-label:contains(Date of Birth)',
    gender: 'input[value="1"]',
    saveBtn: '.orangehrm-form-hint',
    assertSuccessMessage: '.oxd-toast--success.oxd-toast-container--toast'
}

const editProfileConstants = {
    firstName: 'First Name',
    middleName: 'Middle Name',
    lastName: 'Last Name',
    employeeid: 'AM8888',
    otherid: 'Other9999',
    driverlicense: 'License7777',
    licenseexpiredate: '2028-25-06',
    birthDate: '1998-25-06',
}

export { MyInfoLocators, editProfileConstants }

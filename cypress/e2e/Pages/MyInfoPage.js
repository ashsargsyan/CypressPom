import {MyInfoLocators, editProfileConstants} from "../../Locators/MyInfoLocators";

class MyInfoPage {

    openMyInfoPage() {
        cy.get(MyInfoLocators.myInfo).click();
    }

    editFullName() {
        cy.get(MyInfoLocators.firstname).clear().type(editProfileConstants.firstName);
        cy.get(MyInfoLocators.middlename).clear().type(editProfileConstants.middleName);
        cy.get(MyInfoLocators.lastname).clear().type(editProfileConstants.lastName);
    }

    editEmployeeId() {
        cy.get(MyInfoLocators.employeeId)
            .parent()
            .siblings('div')
            .find("input")
            .clear()
            .type(editProfileConstants.employeeid);
        cy.get(MyInfoLocators.otherId)
            .parent()
            .siblings('div')
            .find("input")
            .clear()
            .type(editProfileConstants.otherid);
    }

    editDriverLicense() {
        cy.get(MyInfoLocators.driverLicense)
            .parent()
            .siblings('div')
            .find("input")
            .clear()
            .type(editProfileConstants.driverlicense);
        cy.get(MyInfoLocators.licenseExpireDate)
            .parent()
            .siblings('div')
            .find("input")
            .clear()
            .type(editProfileConstants.licenseexpiredate);
        cy.get(MyInfoLocators.closeCalendar).click();
    }

    editNationality() {
        cy.get(MyInfoLocators.nationality)
            .parent()
            .siblings('div')
            .find("div[tabindex=0]").click();
        cy.get(MyInfoLocators.nationalityList).find(MyInfoLocators.selectNationality).click()
    }

    editMaritalStatus() {
        cy.get(MyInfoLocators.maritalStatus)
            .parent()
            .siblings('div')
            .find("div[tabindex=0]").click();
        cy.get(MyInfoLocators.nationalityList).find(MyInfoLocators.selectMaritalStatus).click();
    }

    editBirthDate() {
        cy.get(MyInfoLocators.birthDate)
            .parent()
            .siblings('div')
            .find("input")
            .clear()
            .type(editProfileConstants.birthDate);
        cy.get(MyInfoLocators.closeCalendar).click();
    }

    editGender() {
        cy.get(MyInfoLocators.gender).click({force: true});
    }

    clickToSaveBtn() {
        cy.get(MyInfoLocators.saveBtn).parent().find("button").click();
    }

    assertSuccessMessage() {
        cy.get(MyInfoLocators.assertSuccessMessage).should('be.visible');
        cy.wait(3000);
    }

    assertEditedDataVisible() {
        cy.get(MyInfoLocators.firstname).should('have.value', editProfileConstants.firstName);
        cy.get(MyInfoLocators.middlename).should('have.value', editProfileConstants.middleName);
        cy.get(MyInfoLocators.lastname).should('have.value', editProfileConstants.lastName);
        cy.get(MyInfoLocators.employeeId)
            .parent()
            .siblings('div')
            .find("input")
            .should('have.value', editProfileConstants.employeeid);
        cy.get(MyInfoLocators.otherId)
            .parent()
            .siblings('div')
            .find("input")
            .should('have.value', editProfileConstants.otherid);
        cy.get(MyInfoLocators.driverLicense)
            .parent()
            .siblings('div')
            .find("input")
            .should('have.value', editProfileConstants.driverlicense);
        cy.get(MyInfoLocators.licenseExpireDate)
            .parent()
            .siblings('div')
            .find("input")
            .should('have.value', editProfileConstants.licenseexpiredate);
        cy.get(MyInfoLocators.nationality)
            .parent()
            .siblings('div')
            .find("div[tabindex=0]")
            .should('have.text', 'Armenian');
        cy.get(MyInfoLocators.maritalStatus)
            .parent()
            .siblings('div')
            .find("div[tabindex=0]")
            .should('have.text', 'Married');
        cy.get(MyInfoLocators.birthDate)
            .parent()
            .siblings('div')
            .find("input")
            .should('have.value', editProfileConstants.birthDate);
        cy.get(MyInfoLocators.gender).should('be.checked');
    }
}

export default MyInfoPage

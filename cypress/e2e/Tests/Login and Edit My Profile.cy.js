import LoginPage from "../Pages/LoginPage";
import MyInfoPage from "../Pages/MyInfoPage";

describe('Orange HRM site', () => {

  it('Sign in and edit my info ', () => {
    const loginPage = new LoginPage();
    const myInfoPage = new MyInfoPage();

    loginPage.open();
    loginPage.login();
    loginPage.assertSuccessLogin();

    myInfoPage.openMyInfoPage();
    myInfoPage.editFullName();
    myInfoPage.editEmployeeId();
    myInfoPage.editDriverLicense();
    myInfoPage.editNationality();
    myInfoPage.editMaritalStatus();
    myInfoPage.editBirthDate();
    myInfoPage.editGender();
    myInfoPage.clickToSaveBtn();
    myInfoPage.assertSuccessMessage();
    myInfoPage.assertEditedDataVisible();
  });
})

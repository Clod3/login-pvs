import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardSecure } from '../pages/dashboard.secure';


test.describe('Login Page', () => {
  let loginPage: LoginPage;
  let dashboardSecure: DashboardSecure;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardSecure = new DashboardSecure(page);
    await loginPage.navigateTo();

  });

  test('Usuario se logea exitosamente a la aplicación', async ({ page }) => {
   

    let username = process.env.TEST_USERNAME;
    let password = process.env.TEST_PASSWORD;
    if (!username || !password) {
      throw new Error('Username or password is not set');
    }
    await loginPage.login(username, password);
    await expect(page).toHaveURL('/secure');
    await expect(dashboardSecure.sucessMessage).toContainText('You logged into a secure area!');
    
  });

  test('Usuario ya autenticado debería poder deslogearse', async ({ page }) => {
    let username = process.env.TEST_USERNAME;
    let password = process.env.TEST_PASSWORD;
    if (!username || !password) {
      throw new Error('Username or password is not set');
    }
    await loginPage.login(username, password);
    await dashboardSecure.logOutButtonClick();
    await expect(page).toHaveURL('/login');
    await expect(loginPage.authenticationMessage).toContainText('You logged out of the secure area! ');
    }); 

    test('No se debería poder ingresar a la aplicación ingresando un username invalido por uso de mayúsculas/minúsculas (case sensitive)', async ({page}) =>{
      let username = process.env.INVALID_USERNAME;
      let password = process.env.TEST_PASSWORD;
      if (!username || !password) {
        throw new Error('Username or password is not set');
      }
      await loginPage.login(username, password);
      await expect(loginPage.authenticationMessage).toContainText('Your username is invalid!');
    })

    test('No se debería poder ingresar a la aplicación ingresando un password invalido por uso de mayúsculas/minúsculas (case sensitive)', async ({page}) =>{
      let username = process.env.TEST_USERNAME;
      let password = process.env.INVALID_PASSWORD;
      if (!username || !password) {
        throw new Error('Username or password is not set');
      }
      await loginPage.login(username, password);
      await expect(loginPage.authenticationMessage).toContainText('Your username is invalid!');
    })

    test('No se debería poder ingresar a la aplicación si el usuario deja el campo password y username vacio', async ({page}) =>{
      await loginPage.login("", "");
      await expect(loginPage.authenticationMessage).toContainText('Your username is invalid!');
    })
});

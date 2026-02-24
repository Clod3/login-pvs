import { expect, type Locator, type Page} from "@playwright/test";



export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly authenticationMessage: Locator;
    
    
    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.authenticationMessage = page.locator('#flash')
    }

    async fillUsername(username: string){
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string){
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async navigateTo(){
        await this.page.goto('/login');
    }


    async login(username: string, password: string){
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();

}
}
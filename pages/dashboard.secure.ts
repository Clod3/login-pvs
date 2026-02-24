import { expect, type Locator, type Page} from "@playwright/test";



export class DashboardSecure{
    readonly page: Page;
    readonly logOutButton: Locator;
    readonly sucessMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.logOutButton = page.getByRole('link', { name: 'Logout' });
        this.sucessMessage = page.locator('#flash')
    }

    async logOutButtonClick(){
        await this.logOutButton.click()
    }
}

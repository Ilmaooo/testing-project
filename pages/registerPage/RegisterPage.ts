import { Page } from "playwright";
import { expect } from "@playwright/test";

class RegisterPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {
        await this.page.goto("https://fontele.ba/");
        await this.page.waitForLoadState("networkidle");
    }

    async clickUserIcon() { 
        await this.page.click('[aria-label="Loguj se"]');
        await this.page.waitForLoadState("networkidle");
    }

    async navigateToRegisterPage(){
        await this.page.click('[href="https://fontele.ba/auth/register"]');
        await this.page.waitForLoadState("networkidle");
    }
    async fillRegisterForm(name: string, lastName: string, email: string, password: string, confirmPassword: string){
        await this.page.fill('[id="userFirstName"]', name);
        await this.page.fill('[id="userLastName"]', lastName);
        await this.page.fill('[id="userMail"]', email);
        await this.page.fill('[id="userPass"]', password);
        await this.page.fill('[id="userPassRepeat"]', confirmPassword);
        await this.page.waitForLoadState("networkidle");
    }
    async agreeToTerms(){
        await this.page.click('[name="therms"]');
    }
    async submitRegisterForm(){
        await this.page.click('[class="btn btn-primary btn-submit"]');
    }
}

export default RegisterPage;

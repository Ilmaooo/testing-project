import { Page } from "playwright";

class LoginPage {
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

    async fillLoginForm(email: string, password: string){
        await this.page.fill('[id="login-email"]', email);
        await this.page.fill('[id="login-password"]', password);
        await this.page.waitForLoadState("networkidle");
    }

    async login(){
        await this.page.click('[class="btn btn-primary btn-submit"]');
    }
}

export default LoginPage;

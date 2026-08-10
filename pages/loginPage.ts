import{Page,Locator,expect} from "@playwright/test"
import { config } from "../config/environments";
export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

constructor(page:Page){
    this.page=page;
    this.username=page.locator('');
    this.password= page.locator('');
    this.loginButton= page.getByRole('button',{name:"Login"});
    this.errorMessage= page.getByText('Invalid username or password.', {exact:true
        
    });
}

navigate = async ()=>{
    await this.page.goto(`${config.baseURL}/login`);
};
enterUsername = async (username: string)=>{
    await this.username.fill(username);
};
enterPassword = async (password: string) =>{
    await this.password.fill(password);
};

clickLogin =async() =>{
    await this.loginButton.click();
};

login = async (username: string, password:string) =>{
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
};

verifyLoginSuccess = async () =>{
   return await expect(this.page).toHaveURL(/manufactures/);
};

verifyErrorMessage = async (info: string) =>{
    return await expect(this.errorMessage).toHaveText(info!);
};
};
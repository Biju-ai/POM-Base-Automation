import {test} from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { user } from "../fixtures/testData/user";

test.describe("valid login function", () =>{
    test("User should login successfully",async({page}) =>{
        const loginPage =new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(user.validUser.username,user.validUser.password);
        await loginPage.verifyLoginSuccess();
    })
    test("second test",async({page}) =>{
        console.log("hello everyone rascallgit ")
    });
})
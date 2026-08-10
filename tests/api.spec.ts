import { test, expect, request } from '@playwright/test';
import { UsersApi } from '../pages/apiPage';
import { user } from '../fixtures/testData/user'

// test.describe('Users API', () => {
//     test('should create a user', async ({ request }) => {
//         const apiPage = new UsersApi(request);
//         const response = await apiPage.getProductList();
//         expect(response.status()).toBe(200);
//         const body = await response.json();
//         console.log( body);
       
//     });

    //  test('Verify valid login', async ({ request }) => {
    //     const apiPage= new UsersApi(request);
    //     const response = await apiPage.verifyLogin(
    //         user.testUser.username,
    //         user.testUser.password
    //     );
    //     expect(response.status()).toBe(200);
    //     const body = await response.json();
    //     console.log(body);
    //     expect(body.responseCode).toBe(200);
    //     expect(body.message).toBe('User exists!');
    // });

//      test('Verify DELETE login is not supported', async ({ request }) => {

//         const usersApi = new UsersApi(request);
//         const response = await usersApi.deleteVerifyLogin();
//         expect(response.status()).toBe(200);
//         const body = await response.json();
//         expect(body.responseCode).toBe(405);
//         expect(body.message).toBe(
//             'This request method is not supported.'
//         );
//     });

//     test('Get user detail by email', async ({ request }) => {

//     const usersApi = new UsersApi(request);
//     const response = await usersApi.getUserDetailByEmail(
//         user.testUser.username
//     );
//     expect(response.status()).toBe(200);
//     const body = await response.json();
//     console.log(body);
//     expect(body.responseCode).toBe(200);
// });

// test('Delete user account', async({request}) =>{
//     const userApi =new UsersApi(request);
//     const respose = await userApi.deleteUser(
//             user.testUser.username,
//             user.testUser.password
//     )
//     expect(respose.status()).toBe(200);
//     const body = await respose.json();
//     console.log(body);
//     expect(body.responseCode).toBe(200);
// })
// });
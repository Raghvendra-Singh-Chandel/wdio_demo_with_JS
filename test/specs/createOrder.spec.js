const payment = require("../pageobjects/payment")
const selectProductToBuy = require("../pageobjects/selectProduct")

const loginPage = require("../pageobjects/loginPage")
const detailPage = require("../pageobjects/detailsPage")

describe("create order end to end scenario",()=> {
    // before(async ()=> {
    //     await loginPage.landingToMainPage
    // });

    it("create order",async()=> {
        await loginPage.loginWithValidCredential()
        await selectProductToBuy.selectProducts()
        await  detailPage.fillALlDetailsAndProcessedToPaymentPage()
        await payment.makePaymentAndCompleteOrder()

    })
    
})

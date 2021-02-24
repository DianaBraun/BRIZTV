/// <reference types="Cypress" />

import { authorize } from "../support/pages/authorize"
import { basePage } from "../support/pages/basePage"

describe('Password Recovery', () => {
    beforeEach(() => {
        basePage.navigate('auth/password-resend');
    });

    it('Checks Password Recovery with Number', () => {
        authorize.checkForgotPassword('0930005740')
        authorize.checkConfirmationMessage('На вказаний вами логін був відправлений код підтвердження')
    })

    it('Checks Password Recovery with +380 Number', () => {
        authorize.checkForgotPassword('+380930005740')
        authorize.checkConfirmationMessage('На вказаний вами логін був відправлений код підтвердження')
    })

    it('Checks Password Recovery with email', () => {
        authorize.checkForgotPassword('braundiana8@gmail.com')
        authorize.checkConfirmationMessage('На вказаний вами логін був відправлений код підтвердження')
    })

    it('Checks Password Recovery with not registered number', () => {
        authorize.checkForgotPassword('0687281938')
        authorize.checkConfirmationMessage('Користувач з таким адресом/номером телефона не знайдений')
    })


    it('Checks Password Recovery with not registered email', () => {
        authorize.checkForgotPassword('braundiana1@gmail.com')
        authorize.checkConfirmationMessage('Користувач з таким адресом/номером телефона не знайдений')
    })

    it('Checks the presence of registration link', () => {
        authorize.checkRegistrationLink()

    })
})
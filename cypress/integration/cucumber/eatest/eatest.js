import { Given, And, Then } from "cypress-cucumber-preprocessor/steps"

Given(`I visit the EA site`, () => {
    cy.visit('http://eaapp.somee.com')
})

Given(`I click the Login link`, () => {
    cy.contains('Login').click()
})

And(`I login as user`, datatable => {
    datatable.hashes().forEach(row => {
        cy.get('#UserName').type(row.username)
        cy.get('#Password').type(row.password,{log:false})
        cy.get('.btn').click()
    });
})
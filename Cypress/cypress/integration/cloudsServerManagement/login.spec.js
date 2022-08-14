/// <reference types="Cypress" />

describe("Make the login tests", () => {

    it("Try to make the login and show error message", () => {

        cy.visit("http://localhost:4200/login");

        cy.get('.navbar-nav')
            .should('not.exist');

        cy.get('.alert')
        .should('not.exist');

        cy.get('#inputEmail')
            .type('admin')
            .should('have.value', 'admin');

        cy.get('#inputPassword')
            .type('admin')
            .should('have.value', 'admin');

        cy.get('#loginButton').click();

        cy.get('.alert', {timeout: 5000})
            .should('exist');

        cy.get('.alert', {timeout: 5000})
            .should('not.exist');
    })

    it("Try to make the login and redirect to the homepage", () => {

        cy.visit("http://localhost:4200/login");

        cy.get('.navbar-nav')
            .should('not.exist');

        cy.get('.alert')
            .should('not.exist');

        cy.get('#inputEmail')
            .type('teste')
            .should('have.value', 'teste');

        cy.get('#inputPassword')
            .type('123')
            .should('have.value', '123');

        cy.get('#loginButton').click();

        cy.url()
            .should('equal', 'http://localhost:4200/');
    })

    it('Try to acess the homepage without make login', () => {

        cy.visit("http://localhost:4200/servers");

        cy.get('.navbar-nav')
            .should('not.exist');

        cy.url().should('equal', 'http://localhost:4200/login');

        cy.url().should('not.equal', 'http://localhost:4200/servers');
    })

    it("Try to make the login, redirect to the homepage, make the logout and check if can access the servers page without make the login", () => {

        cy.visit("http://localhost:4200/login");

        cy.get('.navbar-nav')
            .should('not.exist');

        cy.get('.alert')
            .should('not.exist');

        cy.get('#inputEmail')
            .type('teste')
            .should('have.value', 'teste');

        cy.get('#inputPassword')
            .type('123')
            .should('have.value', '123');

        cy.get('#loginButton').click();

        cy.url()
            .should('equal', 'http://localhost:4200/');

        cy.get('h4')
            .should('have.text', 'Welcome to Clouds Server Management 1.0');

        cy.get('#logoutBtn').click();

        cy.url()
            .should('not.equal', 'http://localhost:4200/');

        cy.url()
            .should('equal', 'http://localhost:4200/login');

        cy.visit("http://localhost:4200/servers");

        cy.get('.navbar-nav')
            .should('not.exist');
    
        cy.url()
            .should('equal', 'http://localhost:4200/login');
    
        cy.url()
            .should('not.equal', 'http://localhost:4200/servers');
    })
})
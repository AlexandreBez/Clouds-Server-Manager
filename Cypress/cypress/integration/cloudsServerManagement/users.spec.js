/// <reference types="Cypress" />

describe("Make the users tests", () => {

    it("Try to create a user with success", () => {

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

        cy.get('#userslink')
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Marley')
            .should('have.value', 'Marley');
        
        cy.get('.form-select')
            .select('Admin')
            .should('have.value', 'Admin');

        cy.get('#createUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'Marley');

        cy.get(':nth-child(2) > [style="background-color: rgba(18, 122, 241, 0.39);"]').
            should('have.text', ' Admin ');
            
    })

    it("Try to create user with diferent roles successfuly", () => {

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

        cy.get("#userslink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        // Admin
        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Marley')
            .should('have.value', 'Marley');
        
        cy.get('.form-select')
            .select('Admin')
            .should('have.value', 'Admin');

        cy.get('#createUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'Marley');

        cy.get(':nth-child(2) > [style="background-color: rgba(18, 122, 241, 0.39);"]')
            .should('have.text', ' Admin ');
        
        // QA
        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Madison')
            .should('have.value', 'Madison');
        
        cy.get('.form-select')
            .select('QA')
            .should('have.value', 'QA');

        cy.get('#createUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get(':nth-child(3) > :nth-child(2)')
            .should('have.text', 'Madison');

        cy.get('[style="background-color: rgba(0, 252, 176, 0.39);"]')
            .should('have.text', ' QA ');

        // Developer
        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Kevin')
            .should('have.value', 'Kevin');
        
        cy.get('.form-select')
            .select('Developer')
            .should('have.value', 'Developer');

        cy.get('#createUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get(':nth-child(4) > :nth-child(2)')
            .should('have.text', 'Kevin');

        cy.get('[style="background-color: rgba(153, 0, 255, 0.39);"]')
            .should('have.text', ' Developer ');
    })

    it('Try to create a user with empty value', () => {

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

        cy.get("#userslink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .should('be.empty');

        cy.get('#createUser').click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains("Username can't be empty");
        })

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');
    })

    it("Try to create a user and cancel", () => {

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

        cy.get("#userslink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Madison')
            .should('have.value', 'Madison');
        
        cy.get('.form-select')
            .select('Admin')
            .should('have.value', 'Admin');

        cy.get('#cancelUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('not.exist');

        cy.get('[style="background-color: rgba(153, 0, 255, 0.39);"]')
            .should('not.exist');
            
    })

    it("Try to create a user with success, click on delete and then cancel the delete action", () => {

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

        cy.get("#userslink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Madelin')
            .should('have.value', 'Madelin');
        
        cy.get('.form-select')
            .select('Developer')
            .should('have.value', 'Developer');

        cy.get('#createUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'Madelin');

        cy.get('[style="background-color: rgba(153, 0, 255, 0.39);"]').
            should('have.text', ' Developer ');

        cy.get(':nth-child(2) > :nth-child(4) > .btn').click();

        cy.get('h4')
            .should('contain', 'You really want to delete the user?');
        
        cy.get('#btnCancelDelete').click();

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'Madelin');

        cy.get('[style="background-color: rgba(153, 0, 255, 0.39);"]').
            should('have.text', ' Developer ');
    })

    it("Try to create a user with success, click on delete and then check if user was deleted with success", () => {

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

        cy.get("#userslink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('app-users > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users/create-user');

        cy.get('.form-control')
            .type('Madison')
            .should('have.value', 'Madison');
        
        cy.get('.form-select')
            .select('Developer')
            .should('have.value', 'Developer');

        cy.get('#createUser').click();

        cy.url()
            .should('equal', 'http://localhost:4200/users');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'Madison');

        cy.get('[style="background-color: rgba(153, 0, 255, 0.39);"]')
            .should('have.text', ' Developer ');

        cy.get(':nth-child(2) > :nth-child(4) > .btn').click();

        cy.get('h4')
            .should('contain', 'You really want to delete the user?');
        
        cy.get('#btnConfirmDelete').click();

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('not.exist');

        cy.get('[style="background-color: rgba(153, 0, 255, 0.39);"]')
            .should('not.exist');

        cy.get('.alert')
            .should('exist');

        cy.get('.alert', {timeout: 6000})
            .should('not.exist');
    })

});
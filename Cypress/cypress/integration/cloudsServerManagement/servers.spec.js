/// <reference types="Cypress" />

describe("Make the servers tests", () => {

    it("Try to create a server with success", () => {

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

        cy.get("#serversLink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('QA')
            .should('have.value', 'QA');
        
        cy.get('.form-select')
            .select('Offline')
            .should('have.value', 'Offline');

        cy.get('#createServer').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'QA');

        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]').
            should('have.text', ' Offline ');
            
    })

    it("Try to create servers with diferent status successfuly", () => {

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

        cy.get("#serversLink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        // Online
        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('QA')
            .should('have.value', 'QA');
        
        cy.get('.form-select')
            .select('Online')
            .should('have.value', 'Online');

        cy.get('#createServer').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'QA');

        cy.get(':nth-child(2) > [style="background-color: rgba(0, 255, 21, 0.39);"]')
            .should('have.text', ' Online ');
        
        // Offline
        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('Developer')
            .should('have.value', 'Developer');
        
        cy.get('.form-select')
            .select('Offline')
            .should('have.value', 'Offline');

        cy.get('#createServer').click();

        cy.get(':nth-child(3) > :nth-child(2)')
            .should('have.text', 'Developer');
        
        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]')
            .should('contain', 'Offline');

        // Unknow
        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('Production')
            .should('have.value', 'Production');
        
        cy.get('.form-select')
            .select('Unknow')
            .should('have.value', 'Unknow');

        cy.get('#createServer').click();

        cy.get(':nth-child(4) > :nth-child(2)')
            .should('have.text', 'Production');
        
        cy.get('[style="background-color: rgba(131, 131, 131, 0.39);"]')
            .should('contain', 'Unknow');
    })

    it('Try to create a server with empty value', () => {

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

        cy.get("#serversLink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .should('be.empty');

        cy.get('#createServer').click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains("Server name can't be empty");
        })

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');
    })

    it("Try to create a server and cancel", () => {

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

        cy.get("#serversLink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('QA')
            .should('have.value', 'QA');
        
        cy.get('.form-select')
            .select('Offline')
            .should('have.value', 'Offline');

        cy.get('#cancelServer').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('not.exist');

        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]').
            should('not.exist');
            
    })

    it("Try to create a server with success, click on delete and then cancel the delete action", () => {

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

        cy.get("#serversLink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('QA')
            .should('have.value', 'QA');
        
        cy.get('.form-select')
            .select('Offline')
            .should('have.value', 'Offline');

        cy.get('#createServer').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'QA');

        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]').
            should('have.text', ' Offline ');

        cy.get(':nth-child(2) > :nth-child(4) > .btn').click();

        cy.get('h4')
            .should('contain', 'You really want to delete the server?');
        
        cy.get('#btnCancelDelete').click();

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'QA');

        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]')
            .should('have.text', ' Offline ');
    })

    it("Try to create a server with success, click on delete and then check if server was deleted with success", () => {

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

        cy.get("#serversLink")
            .click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('app-servers > .btn-primary').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers/create-server');

        cy.get('#inputEmail')
            .type('QA')
            .should('have.value', 'QA');
        
        cy.get('.form-select')
            .select('Offline')
            .should('have.value', 'Offline');

        cy.get('#createServer').click();

        cy.url()
            .should('equal', 'http://localhost:4200/servers');

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'QA');

        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]').
            should('have.text', ' Offline ');

        cy.get(':nth-child(2) > :nth-child(4) > .btn').click();

        cy.get('h4')
            .should('contain', 'You really want to delete the server?');
        
        cy.get('#btnConfirmDelete').click();

        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should('not.exist');

        cy.get('[style="background-color: rgba(255, 0, 0, 0.39);"]')
            .should('not.exist');

        cy.get('.alert')
            .should('exist');

        cy.get('.alert', {timeout: 6000})
            .should('not.exist');
    })
});
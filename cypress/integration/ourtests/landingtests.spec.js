describe('landing page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    describe('First Render', () => {
        it('should have the some selected style applied', () => {
            cy.get('.fa-minus-square-o').should('have.length', 1)
        })
    })

    describe('select all', () => {

        it('should select all', () => {
            cy.get('#selectAllButton').click()
            cy.get('.row').get('.message').get('input').should('be.checked')
            cy.get('.fa-check-square-o').should('have.length', 1)
        });
        it('should deselect all', () => {
            cy.get('#selectAllButton').click()
            cy.get('#selectAllButton').click()
            cy.get('.row').get('.message').get('input').should('not.be.checked')
            cy.get('.fa-square-o').should('have.length', 1)
        });

    })

    it('should let us select an email', () => {
        cy.get('.row').get('.message').get('input').first().click()
    })

    it('should have a "Mark as Read" button', () => {
        cy.get('#markAsReadButton').click()

    });

    it('should have a "Mark as Unread" button', () => {
        cy.get('#markAsUnreadButton').click()
    })

    describe('appplying and unapplying labels', () => {

        describe('Apply Label button behavior', () => {
            it('should have an "Apply Label" selector', () => {
                cy.get('#applyLabelDropdown')
            })

            it('should apply a label, to an email, if its selected and the button is clicked, and it doesnt have that label', () => {
                cy.get('#selectAllButton').click()
                cy.get('#selectAllButton').click()
                cy.get('#msg2').find('input').click()
                cy.get('#applyLabelDropdown').select('dev')
                cy.get('#msg2').find('.label').should('have.text', 'dev')
            })
        })

        describe('Remove Label button behavior', () => {

            it('should have a "Remove Label" selector', () => {
                cy.get('#removeLabelDropdown')
            })

            it.only('should remove a label, from an email, if its selected and the button is clicked, and it has that label', () => {
                cy.get('#selectAllButton').click()
                cy.get('#selectAllButton').click()
                cy.get('#msg3').find('input').click()
                cy.get('#removeLabelDropdown').select('dev')
                cy.get('#msg3').find('.label').should('not.have.text', 'dev')
            })
        })
    })

    it('should have a delete button', () => {
        cy.get('#deleteButton').click()
    })

})

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
        cy.get('#msg1').find('input').click().should('be.checked')
    })

    describe('mark as read functionality', () => {
        it('should have a "Mark as Read" button that marks the selected message as read', () => {
            cy.get('#selectAllButton').click()
            cy.get('#selectAllButton').click()
            cy.get('#msg1').find('input').click()
            cy.get('#markAsReadButton').click()
            cy.get('#msg1').find('.read').should('exist')
        });
    })

    describe('mark as unread functionality', () => {
        it('should have a "Mark as UnRead" button that marks the selected message as Unread', () => {
            cy.get('#selectAllButton').click()
            cy.get('#selectAllButton').click()
            cy.get('#msg4').find('input').click()
            cy.get('#markAsUnreadButton').click()
            cy.get('#msg4').find('.unread').should('exist')
        });
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

            it('should remove a label, from an email, if its selected and the button is clicked, and it has that label', () => {
                cy.get('#selectAllButton').click()
                cy.get('#selectAllButton').click()
                cy.get('#msg3').find('input').click()
                cy.get('#removeLabelDropdown').select('dev')
                cy.get('#msg3').find('.label').should('not.have.text', 'dev')
            })
        })
    })
    describe('Delete Button', () => {
        it('should have a delete button', () => {

        })
        it('should delete a selected message', () => {
            cy.get('#selectAllButton').dblclick()
            cy.get('#msg3').find('input').click()
            cy.get('#deleteButton').click()
            cy.get('#msg3').should('not.exist')
        })
    })



})
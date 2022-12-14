
//let Version = "V5"; let BaseUrl = "http://localhost:2368/ghost/#/setup"
let Version = "V4"; let BaseUrl = "http://localhost:2369/ghost/#/setup"

// Escenario 1 : Login failed without email and password
describe('Login failed without email and password', () => {
  it('Given I navigate to page "' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E1_" + Date.now());
  })

})

// Scenario 2 : Login failed without email
describe('Login failed without email', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password: "Colombia2022"', () => {
    cy.get('#ember8').type('Colombia2022.')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2_" + Date.now());
  })
})


// Scenario 3 : Login failed without password
describe('Login failed without password', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "r.celis@uniandes.edu.com"', () => {
    cy.get('#ember6').type('r.celis@uniandes.edu.com')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3_" + Date.now());
  })
})

// Scenario 4 : Login failed with invalid email format
describe('Login failed with invalid email format', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "r.celisuniandes.edu.com" and "Colombia2022"', () => {
    cy.get('#ember6').type('r.celisuniandes.edu.com')
    cy.get('#ember8').type('Colombia2022.')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E4_" + Date.now());
  })

})

// Scenario 5 : Login failed with non-existent user
describe('Login failed with non-existent user', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "no_exti@uniandes.edu.com" and "Colombia2022."', () => {
    cy.get('#ember6').type('no_exti@uniandes.edu.com')
    cy.get('#ember8').type('Colombia2022.')
  })

  it('I try to login', () => {
    cy.get('#ember10').click()
  })

  it('I expect to see in signin "There is no user with that email address."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E5_" + Date.now());
  })

})

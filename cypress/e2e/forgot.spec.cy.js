describe("Forgot failed with non-existent user", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/signin"', () => {
    cy.visit("http://localhost:2368/ghost/#/signin");
  });
  it('When I fill login with "emailNonExistent@email.com" and "p4ssw0rd.."', () => {
    cy.get("#identification").type("emailNonExistent@email.com");
    cy.get("#password").type("p4ssw0rd..");
  });
  it("And I try to remember password", () => {
    cy.get("#ember6").click();
  });
  it('Then I expect to see "User not found."', () => {
    cy.get(".main-error").then(($elements) => {
      let text = $elements.text();
      if (text.includes("Too many attempts")) {
        expect(text).to.contains("Too many attempts");
      } else {
        expect(text).to.contains("User not found.");
      }
    });
  });
});

describe("Forgot failed without email", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/signin"', () => {
    cy.visit("http://localhost:2368/ghost/#/signin");
  });
  it('When I fill login with "" and ""', () => {
    cy.get("#identification").clear();
    cy.get("#password").clear();
  });
  it("And I try to remember password", () => {
    cy.get("#ember6").click();
  });
  it('Then I expect to see "We need your email address to reset your password!"', () => {
    cy.get(".main-error").then(($elements) => {
      let text = $elements.text();
      expect(text).to.contains(
        "We need your email address to reset your password!"
      );
    });
  });
});

describe("Forgot failed with invalid email format", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/signin"', () => {
    cy.visit("http://localhost:2368/ghost/#/signin");
  });
  it('When I fill login with "emailNonExistent" and ""', () => {
    cy.get("#identification").type("emailNonExistent");
    cy.get("#password").clear();
  });
  it("And I try to remember password", () => {
    cy.get("#ember6").click();
  });
  it('Then I expect to see "We need your email address to reset your password!"', () => {
    cy.get(".main-error").then(($elements) => {
      let text = $elements.text();
      expect(text).to.contains(
        "We need your email address to reset your password!"
      );
    });
  });
});

describe("Forgot failed with non-existent user many times", () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/signin"', () => {
    cy.visit("http://localhost:2368/ghost/#/signin");
  });
  it('When I fill login with "emailNonExistent@email.com" and ""', () => {
    cy.get("#identification").type("emailNonExistent@email.com");
    cy.get("#password").clear();
  });
  it("And I try to remember password 5 times", () => {
    cy.get("#ember6").click();
    cy.get("#ember6").click();
    cy.get("#ember6").click();
    cy.get("#ember6").click();
    cy.get("#ember6").click();
  });
  it('Then I expect to see "Too many attempts try again in an hour"', () => {
    cy.get(".main-error").then(($elements) => {
      let text = $elements.text();
      expect(text).to.contains("Too many attempts");
    });
  });
});

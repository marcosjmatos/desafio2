/// <reference types="cypress" />

describe("Pobando el Modulo TO DO LIST", () => {
  let loginData, taskData;
  before("set entorno de pruebas", () => {
    cy.fixture("testData").then((data) => {
      loginData = data.login;
    });
    cy.fixture("testData").then((data) => {
      taskData = data.tareas;
    });
  });
  beforeEach("Before each", () => {
    cy.visit("/");
    cy.get("#registertoggle").dblclick();
    cy.get("#user").type(loginData.user);
    cy.get("#pass").type(loginData.password);
    cy.xpath("//button[contains(text(), 'Log in')]").click();
    cy.get(`[id*='user_pushingit_']`).should("be.visible");
    cy.xpath('//a[@id="todolistlink"]').click();
  });
  it("Ingresando 5 tareas", () => {
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea1}{enter}`);
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea2}{enter}`);
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea3}{enter}`);
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea4}{enter}`);
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea5}{enter}`);
  });
  it("Verificando que exitan los botones", () => {
    cy.get("#all").should("exist");
    cy.get("#completed").should("exist");
    cy.get("#active").should("exist");
    cy.get("#removeAll").should("exist");
  });
  it("Ingresando 5 tareas", () => {
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea1}{enter}`);
    cy.xpath('//input[@id="task"]').type(`${taskData.tarea2}{enter}`);
    cy.get("p").contains(taskData.tarea1).click();
    cy.get('p[style="text-decoration: line-through;"]').siblings().click()
    cy.get('p[style="text-decoration: none;"]').siblings().click()

  });
});

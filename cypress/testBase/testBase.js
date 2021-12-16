const todosFrontPages = require('../pageObjects/todosFrontPages.json')

export let MainScreen = "MainScreen"

export function Open(pageName, url="'")
{
    if(url.includes("https://"))
        cy.visit(url);
    else{
        cy.visit(Cypress.config().baseUrl+ PagesUrlMapping(pageName))
    }
}

export function Click(locator)
{
    if(locator.includes('//')) {
        cy.xpath(locator).then(($element) => {
            if($element.is(":visible"))
                cy.xpath(locator).click()
            else
                cy.xpath(locator).click({force:true})
        })
    }
    else
    {
        cy.get(locator).then(($element) => {
            if($element.is(":visible"))
                cy.get(locator).click()
            else
                cy.get(locator).click({force:true})
        })
    }
}

export function Fill(locator, text)
{
    if(locator.includes('//')) {
        cy.xpath(locator).then(($element) => {
            if($element.is(":visible"))
                cy.xpath(locator).type(text)
            else
                cy.xpath(locator).type(text,{force:true})
        })
    }
    else
    {
        cy.get(locator).then(($element) => {
            if($element.is(":visible"))
                cy.get(locator).type(text)
            else
                cy.get(locator).type(text,{force:true})
        })
    }
}

export function ClearAndFill(locator, text)
{
    if(locator.includes('//'))
    {
        cy.xpath(locator).then(($element) => {
            if($element.is(":visible"))
                cy.xpath(locator).clear()
            else
                cy.xpath(locator).clear({force:true})
        })
        cy.xpath(locator).then(($element) => {
            if($element.is(":visible"))
                cy.xpath(locator).type(text)
            else
                cy.xpath(locator).type(text,{force:true})
        })
    }
    else
    {
        cy.get(locator).then(($element) => {
            if($element.is(":visible"))
                cy.get(locator).clear()
            else
                cy.get(locator).clear({force:true})
        })
        cy.get(locator).then(($element) => {
            if($element.is(":visible"))
                cy.get(locator).type(text)
            else
                cy.get(locator).type(text,{force:true})
        })
    }
}

export function MouseHover(locator)
{
    if(locator.includes('//'))
        cy.xpath(locator).trigger('mouseover')
    else
        cy.get(locator).trigger('mouseover')
}

export function SeeText(locator, expectedText)
{
    if(locator.includes('//'))
        cy.xpath(locator).eq(0).should('have.text', expectedText)
    else
        cy.get(locator).eq(0).should('have.text', expectedText)
}

export function SeeValue(locator, expectedValue)
{
    if(locator.includes('//'))
        cy.xpath(locator).should('have.attr', 'value').should('contain', expectedValue)
    else
        cy.get(locator).should('have.attr', 'value').should('contain', expectedValue)
}

export function DontSeeText(locator, expectedText)
{
    if(locator.includes('//'))
        cy.xpath(locator).eq(0).should('not.have.text', expectedText)
    else
        cy.get(locator).eq(0).should('not.have.text', expectedText)
}

export function Check(locator, option)
{
    if(locator.includes('//'))
        cy.xpath(locator).check(option)
    else
        cy.get(locator).check(option)
}

export function PagesUrlMapping(pageName)
{
    switch(pageName)
    {
        case "MainScreen":
            return todosFrontPages.MainScreen.Url;
    }
}

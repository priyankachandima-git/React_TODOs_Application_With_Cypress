const todosFrontPages = require('../pageObjects/todosFrontPages.json')

export let MainScreen = "MainScreen"

/**
 *
 * @param {string} pageName : page object name
 * @param {string} url : relative URL of the page
 * @summary :Open page using give url
 */
export function Open(pageName, url="'")
{
    if(url.includes("https://"))
        cy.visit(url);
    else{
        cy.visit(Cypress.config().baseUrl+ PagesUrlMapping(pageName))
    }
}

/**
 * @param {string} pageName : page object name)
 * @summary :Verify user landed to the expected page
 */
export function AmOn(pageName)
{
    cy.get('body').then((body) => {
        if(body.hasClass(PagesIdentifierMapping(pageName)))
        {
            return
        }
    })
}
/**
 * @param locator : string element
 *  @summary :Verify web element is exist
 */
export function See(locator)
{
    if(locator.includes('/')) {
        cy.xpath(locator, {timeout: 20000}).then(($element) => {
            if($element.is(':visible'))
                return
            else
                assert.isTrue(false, "Element: " + locator.toString() + " is not visible")
        })
    }
    else {
        cy.get(locator, {timeout: 20000}).then(($element) => {
            if($element.is(':visible'))
                return
            else
                assert.isTrue(false, "Element: " + locator.toString() + " is not visible")
        })
    }
}
/**
 * @param locator : string element
 *  @summary :Verify web element not exist
 */
export function DontSee(locator) {
    if (locator.includes('//'))
        cy.xpath(locator).should('not.exist')
    else
        cy.get(locator).should('not.exist')
}
/**
 * @param locator : string element
 * @param attribute : html attribute
 * @param value : attribute value
 *  @summary :Verify web element attribute has given value
 */
export function SeeAttributeValue(locator, attribute, value)
{
    if(locator.includes('/')) {
        cy.xpath(locator, {timeout: 20000}).then(($element) => {
            if($element.invoke('attr', attribute).should('eq', value))
                return
            else
                assert.isTrue(false, "Element: " + locator.toString() + "attribute "+attribute.toString()+ " is not present")
        })
    }
    else {
        cy.get(locator, {timeout: 20000}).then(($element)=> {
            if(cy.get(locator).invoke('attr', attribute).should('eq', value))
                return
            else
                assert.isTrue(false, "Element: " + locator.toString() + "attribute "+attribute.toString()+ " is not present")
        })
    }
}

/**
 * @param locator : Web element
 * @param text : input text
 *  @summary :type given input value and press enter key
 */
export function FillAndPressEnter(locator, text){
    cy.get(locator).type(text+"{enter}")
}

/**
 * @param locator : string element
 *  @summary :click on given web element
 */
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

/**
 * @param miliSeconds : number of millisecond to wait
 *  @summary : pause execution upto given time
 */
export function Wait(miliSeconds)
{
    cy.wait(miliSeconds)
}

/**
 * @param locator : web element
 * @param text : input text
 * @summary : insert text to given web element
 */
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

export function PagesIdentifierMapping(pageName)
{
    switch(pageName)
    {
        case "MainScreen":
            return todosFrontPages.MainScreen.Identifier;
    }
}




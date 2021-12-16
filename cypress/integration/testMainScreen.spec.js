import {MainScreen} from "../testBase/testBase";
import {GetIndexOfTodoItem, RemoveItemByIndex} from "../helpers/mainScreenHelper";

const I = require('../testBase/testBase')
const todosFrontPages = require('../pageObjects/todosFrontPages.json')
const mainScreenHelper = require('../helpers/mainScreenHelper')

context('Test suite of TODOS application main screen', ()=> {

  /*  it('As a user I should be able to access TODOS application', () => {
        I.Open(MainScreen)
        I.AmOn(MainScreen)
    })

    it('As a user I should be able to see the header as "todos"', () => {
        I.Open(MainScreen)
        I.SeeText(todosFrontPages.MainScreen.PageHeader, "todos")
    })
    it('As a user I should be able to see the input filed to add new todo item', () => {
        I.Open(MainScreen)
        I.See(todosFrontPages.MainScreen.AddNewTodoInput)
    })
    it('As a user I should be able to see a readable place holder message on add item input field', () => {
        I.Open(MainScreen)
        I.SeeAttributeValue(todosFrontPages.MainScreen.AddNewTodoInput,'placeholder', 'What needs to be done?')
    })
    it('As a user I should be able to add a new todo item', () => {
        I.Open(MainScreen)
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"First")
        I.See(todosFrontPages.MainScreen.TodoList)
    })

    it('As a user I should have a option to delete a particular item on todo list', () => {
        I.Open(MainScreen)
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"First")
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"Second")
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"Third")
        I.Wait(2000)
        cy.get(todosFrontPages.MainScreen.DeleteItem).each(($el, index, $list) =>{
            if(index==2) {
                cy.wrap($el).click({force: true})
            }
        })
        I.SeeText(todosFrontPages.MainScreen.NumberOfItemsLeft, "2" )
    })

    it('As a user I should have a option to mark a particular item as completed', () => {
        I.Open(MainScreen)
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"First")
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"Second")
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"Third")
        I.Wait(2000)
        cy.get(todosFrontPages.MainScreen.SelectItems).each(($el, index, $list) =>{
            if(index==2) {
                cy.wrap($el).click({force: true})
            }
        })
        cy.get(todosFrontPages.MainScreen.TodoItems).each(($el, index, $list) =>{
            if(index==2) {
                cy.wrap($el).should('have.class', 'completed')
            }
        })
    })*/

    it('As a user I should be able to mark all item active items as completed in one click', () => {
        I.Open(MainScreen)
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"First")
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"Second")
        I.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput,"Third")
        I.Wait(2000)
        I.Click(todosFrontPages.MainScreen.CompleteAll)
        cy.get(todosFrontPages.MainScreen.TodoItems).each(($el, index, $list) =>{
                cy.wrap($el).should('have.class', 'completed')
        })
    })
})

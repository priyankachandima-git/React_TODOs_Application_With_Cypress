import {MainScreen} from "../testBase/testBase";
import { I_AddTodoItems,I_RemoveTodoItemByTitle,
I_MarkItemAsCompletedByTitle, I_ValidateItemIsCompletedByTitle,
I_ValidateAllCompletedItemsGetFiltered_By_CompletedFilterOption,
I_ValidateAllItemIsCompleted, I_ValidateNumberOfActiveItemMessage, I_ValidateTodoItemDoesNotExistByTitle} from "../helpers/mainScreenHelper"

const I = require('../testBase/testBase')
const todosFrontPages = require('../pageObjects/todosFrontPages.json')
const maniScreenData = require('../fixtures/mainScreen.json')

    describe('Test Plan of TODOS Application', ()=>{
    before(()=>{
        cy.task('readXlsx', {file: 'cypress/fixtures/mainScreenData.xlsx', sheet: "MainScreen"}).then((todoItems)=>{
        cy.writeFile('cypress/fixtures/mainScreen.json', {todoItems})
        })
    })
    context('Test suite of TODOS application main screen', ()=> {
        it('As a user I should be able to access TODOS application', () => {
            I.Open(MainScreen)
            I.AmOn(MainScreen)
        })

        it('As a user I should be able to see the input filed to add new TODO item', () => {
            I.Open(MainScreen)
            I.See(todosFrontPages.MainScreen.AddNewTodoInput)
        })

        it('As a user I should be able to see a readable place holder message on add item input field', () => {
            I.Open(MainScreen)
            I.SeeAttributeValue(todosFrontPages.MainScreen.AddNewTodoInput,'placeholder', 'What needs to be done?')
        })

        it('As a user I should be able to add a new TODO item', () => {
            I.Open(MainScreen)
            I_AddTodoItems(maniScreenData.todoItems,3)
            I.See(todosFrontPages.MainScreen.TodoList)
            I_ValidateNumberOfActiveItemMessage(3)
        })

        it('As a user I should have a option to delete a particular item on TODO list', () => {
            I.Open(MainScreen)
            I_AddTodoItems(maniScreenData.todoItems,3)
            I_RemoveTodoItemByTitle(maniScreenData.todoItems[0].TodoItemTitle)
            I_ValidateTodoItemDoesNotExistByTitle(maniScreenData.todoItems[0].TodoItemTitle)
            I_ValidateNumberOfActiveItemMessage(2)
        })

        it('As a user I should have an option to mark a particular item as completed', () => {
            I.Open(MainScreen)
            I_AddTodoItems(maniScreenData.todoItems,3)
            I_MarkItemAsCompletedByTitle(maniScreenData.todoItems[0].TodoItemTitle)
            I_ValidateItemIsCompletedByTitle(maniScreenData.todoItems[0].TodoItemTitle)
        })

        it('As a user I should be able to mark all active items as completed in one click', () => {
            I.Open(MainScreen)
            I_AddTodoItems(maniScreenData.todoItems,3)
            I.Click(todosFrontPages.MainScreen.CompleteAll)
            I_ValidateAllItemIsCompleted()
        })

        it('As a user I should be able to clear all the completed item(s) in one click', () => {
            I.Open(MainScreen)
            I_AddTodoItems(maniScreenData.todoItems,3)
            I.Click(todosFrontPages.MainScreen.CompleteAll)
            I_ValidateAllItemIsCompleted()
            I.Click(todosFrontPages.MainScreen.ClearAllCompleted)
            I.DontSee(todosFrontPages.MainScreen.TodoList)
            I.DontSee(todosFrontPages.MainScreen.ClearAllCompleted)
        })

        it('As a user I should be able to filter all the completed items', () => {
            I.Open(MainScreen)
            I_AddTodoItems(maniScreenData.todoItems,6)
            I_MarkItemAsCompletedByTitle(maniScreenData.todoItems[0].TodoItemTitle)
            I_MarkItemAsCompletedByTitle(maniScreenData.todoItems[1].TodoItemTitle)
            I.Click(todosFrontPages.MainScreen.FilterByCompletedItem)
            I_ValidateAllCompletedItemsGetFiltered_By_CompletedFilterOption(2)
        })
        })
    })



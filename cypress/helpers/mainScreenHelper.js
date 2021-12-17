const todosFrontPages = require('../pageObjects/todosFrontPages.json')
const testBase = require('../testBase/testBase')
let indexOfItem

/**
 * @param itemList : list of TODO items
 * @param numberOfItemsNeeded : how many items need to be pick form the given item list
 * @summary : Inset given number of TODO items
 */
export function AddTodoItems(itemList, numberOfItemsNeeded)
{
    for(let i=0;i<numberOfItemsNeeded;i++) {
        testBase.FillAndPressEnter(todosFrontPages.MainScreen.AddNewTodoInput, itemList[i].TodoItemTitle)
    }
}
/**
 * @param todoItemTitle : Title of the given TODO item
 * @summary : get the index of given TODO item that located on item list
 */
export function GetIndexByItemTitle(todoItemTitle){
    cy.get(todosFrontPages.MainScreen.TodoItemLabel).each(($el,index,$list) =>{
        if($el.text().toString() ==todoItemTitle){
            indexOfItem = index
        }})
}
/**
 * @param todoItemTitle : Title of the given TODO item
 * @summary Remove given TODO item from the list
 */
export function RemoveTodoItemByTitle(todoItemTitle)
{
    GetIndexByItemTitle(todoItemTitle)
    cy.get(todosFrontPages.MainScreen.DeleteItem).each(($el, index, $list) =>{
        if(index==indexOfItem) {
            cy.wrap($el).click({force: true})
        }})
}
/**
 * @param todoItemTitle : Title of the given TODO item
 * @summary Mark given TODO item as completed
 */
export function MarkItemAsCompletedByTitle(todoItemTitle)
{
    GetIndexByItemTitle(todoItemTitle)
    cy.get(todosFrontPages.MainScreen.SelectItems).each(($el, index, $list) =>{
        if(index==indexOfItem) {
            cy.wrap($el).click({force: true})
        }
    })
}
/**
 * @param todoItemTitle
 * @summary Verify the given TODO item is completed
 */
export function ValidateItemIsCompletedByTitle(todoItemTitle){
    GetIndexByItemTitle(todoItemTitle)
    cy.get(todosFrontPages.MainScreen.TodoItems).each(($el, index, $list) =>{
        if(index==indexOfItem) {
            cy.wrap($el).should('have.class', 'completed')
        }
    })
}
/**
 * @param completedItemsCount : number of completed TODO items
 * @summary Verify 'Completed' filter listed all the complete TODO items
 */
export function ValidateAllCompletedItemsGetFiltered_By_CompletedFilterOption(completedItemsCount){
    cy.get(todosFrontPages.MainScreen.TodoItems).each(($el, index, $list) =>{
            cy.wrap($el).should('have.class', 'completed')
            cy.wrap($list).should('have.length', completedItemsCount)
    })
}
/**
 * @summary Verify all items has completed
 */
export function ValidateAllItemIsCompleted(){
    cy.get(todosFrontPages.MainScreen.TodoItems).each(($el, index, $list) =>{
        cy.wrap($el).should('have.class', 'completed')
    })
}
/**
 * @summary Verify the label text that given the items count that a in active mode
 */
export function ValidateNumberOfActiveItemMessage(numberOfActiveItems){
    cy.get(todosFrontPages.MainScreen.NumberOfItemsLeft).should('contain.text', numberOfActiveItems)
}
/**
 * @summary Verify the given TODO item doesn't exist in the list
 */
export function ValidateTodoItemDoesNotExistByTitle(todoItemTitle){
    cy.get(todosFrontPages.MainScreen.TodoItemLabel).each(($el,index,$list) =>{
        if($el.text().toString() ==todoItemTitle){
            assert.isTrue(false, "Todo item "+todoItemTitle+ " not deleted")
        }else{
            assert.isTrue(true)
        }
    })
}




const todosFrontPages = require('../pageObjects/todosFrontPages.json')

export function GetIndexOfTodoItem(itemTitle)
{
    cy.get(todosFrontPages.MainScreen.TodoItemLabel).each(($el, index, $list) =>{
        if($el.text() == itemTitle){
            return index;
        }
        else {
            assert.isTrue(false, "Element:  is not present")
        }

    })
}

export function RemoveItemByIndex(indexVale)
{
    cy.get(todosFrontPages.MainScreen.DeleteItem).each(($el, index, $list) =>{
        if(index==indexVale){
            cy.wrap($el).click({force:true})
        }
    })
}


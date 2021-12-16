import {MainScreen} from "../testBase/testBase";

const I = require('../testBase/testBase')
const todosFrontPages = require('../pageObjects/todosFrontPages.json')


context('Button Content Block Test Suite', ()=> {

    it('Button_InstallAddOn', () => {
        I.Open(MainScreen)
        I.SeeText(todosFrontPages.MainScreen.PageHeader, "todos")
    })
})

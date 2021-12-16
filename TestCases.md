<table>
  <tr>
    <th>Test_Case_Id</th>
    <th>Test_Case_Title</th>
    <th>Test_Case_Summary</th>
    <th>Pre-requisite</th>
    <th>Steps</th>
    <th>Expected_Result</th>
  </tr>
  <tr>
    <td>001</td>
    <td>As a user I should be able to access TODOS app</td>
    <td>Verify guest user can access the application using public URL</td>
    <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
  <tr><td></td></tr>
  <tr>
   <td>002</td>
    <td>As a user I should be able to see the header as 'todos'</td>
    <td>Verify user can see the page header as 'todos' once navigate to the main screen</td>
    <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
 <tr>
    <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify page header</td>
    <td>User should be able to see the page header as 'todos'</td>
  </tr>
  <tr><td></td></tr>
  <tr>
    <td>003</td>
    <td>As a user I should be able to see the input filed to add new todo item </td>
    <td>Verify user can see the input filed on main screen for adding a new todo item </td>
    <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify input field is exist</td>
    <td>User should be able to see input filed to add todo items</td>
  </tr>
   <tr><td></td></tr>
  <tr>
    <td>004</td>
    <td>As a user I should be able to see a readable hint on add todo item input filed </td>
    <td>Verify user can see the span text related to add todo item input filed as "What needs to be done" </td>
     <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>  
     <td></td> 
    <td>Verify hint text (span value) that related to add todo item input field</td>
    <td>User should be able to see the hint as "What needs to be done"</td>
  </tr>
 <tr><td></td></tr>
  <tr>
    <td>005</td>
    <td>As a user I should be able to see the cursor point by default set to add todo item input field   </td>
    <td>Verify application by default set the cursor point into the add todo item input field</td>
     <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Check the default focus of cursor point</td>
    <td>Cursor point should be set to add todo item input filed as by default </td>
  </tr>
 <tr><td></td></tr>
  <tr>
    <td>006</td>
    <td>As a user I should be able to see the basic instruction text and other system related information as labels</td>
    <td>Validate the text of basic instruction and other system related information that should appeared on main screen </td>
     <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify user can see the basic instruction text </td>
    <td>User should be able to the the basic instruction text as 'Double-click to edit a todo' </td>
  </tr>
 <tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify user can see the other system related information </td>
    <td>User should be able to the the system related information as 'Created by petehunt  Part of TodoMVC' </td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>007</td>
    <td>As a user I should be able to add a new todo item</td>
    <td>Verify whether user can add a new todo item by typing text into the box and hitting enter</td>
     <td></td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Enter text 'First item' to the text box </td>
    <td>User should be able to type 'First item' on text box</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Press enter key </td>
    <td>todo list should be created with single item as 'First item'</td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>008</td>
    <td>As a user I should have a option to delete a particular item on todo list/td>
    <td>Verify whether user can delete a single item on todo list</td>
     <td>There should be a already crated todo list with at least a single item </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mouse hove to the particular item that you want to delete </td>
    <td>User should be able to see the cross (X) mark on right side of the list item</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on cross icon </td>
    <td>Particular todo item should be deleted</td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>009</td>
    <td>As a user I should have a option to mark a particular item as completed/td>
    <td>Verify whether user can complete a single item on todo list</td>
     <td>There should be a already crated todo list with at least a single item </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify whether user has given a checkbox attached to each item on the ist</td>
    <td>Each todo item should have a corresponding checkbox on left hand side </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Check the corresponding checkbox that related to item that need to mark as completed </td>
    <td>Particular item should mark as completed, so the item name should get strikethrough </td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>010</td>
    <td>As a user I should have a option to undo a completed item </td>
    <td>Verify whether user can undo a completed item at anytime</td>
     <td>There should be a already crated todo list with at least a single item </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark particular todo item as completed by clicking on related checkbox</td>
    <td>Particular item should appeared as completed</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on same check box again </td>
    <td>Particular item should revert ad uncompleted, so the strikethrough effect should removed</td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>011</td>
    <td>As a user I should be able to mark all item active items as completed in one click </td>
    <td>Verify whether user can have a option to mark all active todo items as completed in single click</td>
     <td>There should be a already crated todo list with multiple items (ex: First, Second, Third, Fourth, Fifth) </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list with five items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify whether user can see the arrow head attached to the input filed that towards to the down side</td>
    <td>There should be arrow head attached to the left hand side of the input filed that should towards to the down side </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on that arrow head </td>
    <td>Arrow head should get bolded and all the active items should be marked as completed</td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>012</td>
    <td>As a user I should be able to undo all items from completed state to active state in one click </td>
    <td>Verify whether user can have a option to mark all active todo items as completed then undo in single click </td>
     <td>There should be a already crated todo list with multiple items (ex: First, Second, Third, Fourth, Fifth) </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list with five items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark all items as completed by using arrow head that attached to the input field</td>
    <td>All five items should get marked as completed</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on that arrow head again</td>
    <td>All the completed items should get undo as active</td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>013</td>
    <td>As a user I should be able to clear all the completed item(s) in one click </td>
    <td>Verify whether user can have a option to remove all the completed item from the list in a single click  </td>
     <td>There should be a already crated todo list with multiple items (ex: First, Second, Third, Fourth, Fifth) </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list with five active items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark one item (First) as completed</td>
    <td>Selected item should get marked as completed and new link button should appeared next to the 'Completed' filter option as 'Clear completed'</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on that 'Clear completed' link button </td>
    <td>Completed item (First) should be removed from the list and 'Clear completed' link button should be disappeared</td>
  </tr>
 <tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark another few items (Second, Third) as completed </td>
    <td>Selected items should get marked as completed and again 'Clear completed' button should appeared next to the 'Completed' filter option</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on that 'Clear completed' link button </td>
    <td>Completed items (Second, Third) should be removed from the list and 'Clear completed' link button should be disappeared</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Add another few items to the list (Sixth, Seventh) </td>
    <td>Now there should be four active items as Fourth,Fifth,Sixth and Seventh</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark all four active items as completed by using arrow key attached to the input field</td>
    <td>All four items should get marked as completed and link button should appeared next to the 'Completed' filter option as 'Clear completed' </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on that 'Clear completed' link button </td>
    <td> All items should be removed from the list and 'Clear completed' link button and all other action buttons should be disappeared</td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>014</td>
    <td>As a user I should be able to get filtered all the todo items </td>
    <td>Verify whether user can get filtered all the item on the list regardless of the status</td>
     <td>There should be a already crated todo list with multiple items (ex: First, Second, Third, Fourth, Fifth) </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list with five items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Verify whether 'All' filter option has been applied by default</td>
    <td>'All' filter option should be applied by default, so all the menu item should be listed regardless of the status </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark few items ( Ex: First and Second) as completed </td>
    <td>Still user should be able to see all the items since 'All' filter is applied. </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Undo one item ( Ex: First) as uncompleted </td>
    <td>Still user should be able to see all the items since 'All' filter is applied. </td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>015</td>
    <td>As a user I should have be able to get filtered 'Active' items form the list </td>
    <td>Verify whether user can get filtered only the active items by applying 'Active' filter option</td>
     <td>There should be a already created todo list with multiple items (ex: First, Second, Third, Fourth, Fifth).Make sure to keep all the item in active status. </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list with five active items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on 'Active' filter option</td>
    <td>Still user should be able to all the five items </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark few items ( Ex: First and Second) as completed </td>
    <td>Now only uncompleted items (Third,Fourth and Fifth) should be visible to user</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Undo one item ( Ex: First) as uncompleted </td>
    <td>Still user should be able to see all the items since 'All' filter is applied. </td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>016</td>
    <td>As a user I should have be able to get filtered 'Completed' items form the list </td>
    <td>Verify whether user can get filtered only the completed items by applying 'Completed' filter option</td>
     <td>There should be a already created todo list with multiple items (ex: First, Second, Third, Fourth, Fifth).Make sure to keep all the item in active status. </td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen and could be able to see a todo list with five active items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on 'Completed' filter option</td>
    <td>No item should be listed </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click 'All' filter option</td>
    <td>All five items should get listed</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark few items ( Ex: First and Second) as completed </td>
    <td>Still all five items should be listed, two of them as completed and rest as active</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on 'Completed' filter option </td>
    <td>Only the  two completed items (First and Second) should get listed </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Undo one of item (First) as uncompleted </td>
    <td>Only one completed items (Second) should get listed </td>
  </tr>
<tr><td></td></tr>
  <tr>
    <td>017</td>
    <td>As a user I should be able to see the number of items left in active state </td>
    <td>Verify whether application show the number of active items in the list against to each actions</td>
     <td>Make sure to clean all the todo items if exist.</td> 
    <td>Open 'https://todomvc.com/examples/react/#/' URL using google chrome</td>
    <td>User should navigate to TODOS main screen without having menu items</td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Add one todo item as 'First' </td>
    <td>New todo list should created with single item, and there should be a item count label appeared as '1 item left'  </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark that item as completed</td>
    <td>That item should get completed and, label text should be change as '0 items left'  </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Undo that item as uncompleted</td>
    <td>That item should revert to the active state and label text should be change as '1 item left'  </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Add another few items to the list ( as Second, Third, Fourth, Fifth)</td>
    <td>Added items should listed with existing item in active state, and label text should be changes as '5 items left'  </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mark all items as completed by using arrow head that attached to the input field</td>
    <td>All five items going to mark as completed, and label text should be changes as '0 items left'  </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Click on same arrow head again</td>
    <td>All five items going to undo from completed state to active state, and label text should be changes as '5 items left'  </td>
  </tr>
<tr>
   <td></td>
    <td></td>
    <td></td>
     <td></td> 
    <td>Mouse hover to the 'First' item and click on cross icon</td>
    <td>'First' item should be removed from the list, and label text should be changes as '4 items left'  </td>
  </tr>
</table>
# orderup
MEN stack app project

### Outline
This project was conducted to build an apllication that takes the menu inputs of a restaurant and allows for the realtime construction and destruction of a Que of active orders. 
After setting up a personal user, specific menus can be set up with their own specific menu items. These dishes can be further specified by price, cook time and Ingredients. The app is designed with the typical restaurant server/kitchen relationship in mind. A user actiung on the app as an order taker, can directly select available menu items to be sent to the restaurant que of active orders, where they can be viewed by an order fulfiller to keeptrack of and execute incoming orders. 

The application was built with utility in mind. Functionality and simplicity have been emphasized in place of extravagent styilings. 

#### User Stories 
https://trello.com/b/N1Bxtb2u/od3-project-2)

Unfortunately, current time constraints have left the project short of the ultimate goals of functionality. Original planning included access to kitchen models to specifiy within a restaurant (and potentially several locations of the restaurant), what the kitchen's capacity to fulfill orders was, based on present euipment capabilities. Certain model keys are evident holdovers of this ambition, such as the stove burner/oven usage requirements, and estimated minimum cook times of each dish. Use these conditions as a guide, the active order que was then intended to be sorted in realtime to display the most efficient sequence of order fulfillment. It is still the future goal of the project to repopulate the kitchen model tree, and reassign ques specific to kitchens. 



__Heroku Live-Site:__(https://fathomless-ravine-49664.herokuapp.com/)

### Wire Frames
![](https://github.com/K-Ramberg/orderup/blob/master/Wireframe/wireframe1.jpg)
![](https://github.com/K-Ramberg/orderup/blob/master/Wireframe/wireframe2.jpg)

### ERD 
![](https://github.com/K-Ramberg/orderup/blob/master/ERD/erd1.jpg)

#### Langauges, Libraries, ect.
- Mongoose & MongoDB››
- Express
- Node
- Handlebars
- Materialize
- GoogleFonts

#### My Portfolio
https://k-ramberg.github.io/

#### Other Version Improvements
- I would at a later date like to make users unique and secure
to allow for an individualized experience that can't be interfered with.
- I would like to implement a completed orders history to que model
- It may also be benefitial to set up an "ingredients used" model to track necessary ingredient purcahsing needs.

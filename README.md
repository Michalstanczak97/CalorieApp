# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Official App documentation

### Title: Apps for counting and comparing foods nutrition data.


### description

ColorieApp is a health content app that allows you to read more about metabolism, count the calorie demand, add and edit your products to the table and see how data looks on the chart. There are two subpages containing information about metabolism, calculator, form, table data and chart. 


### List of technologies used in app:
1. Sass Scss to styling components. The Fonts folder has included colors and fonts used in this project, so you can get inside and check what exactly the hex color and fonts family looks like.
2. Router - to change a subpage to another by clicking the submit button.
3. hook history - you can get access  to the history instance that you may use to navigate. For example: “Calculator component saves entered values by the user and send it to another component without losing data”
4. React chart.js - chart.js was used to display all data. You can open the Chart component and see all the structures. 


### Plans for improvement app:
    - Instead of scss there is a plan for using a styled components and styleguidist.
	    
     


### components
App - Component is the main component in React which acts as a container for all other components
FirstPage- Secondary components contain all of the components included at the first page.
ProductTable - this component allows us to get Api fetch. It returns responses with food nutritions data. Also there is all of the calculation counting with the right amount of nutritions value.
FoodComponents - Included information for user about components of metabolism
Header - first section with web name information
Banner - First welcome container rendered by FirstPage component
Calculator - there is a section with caloric demand calculation 
Chapter - single fragment separating one component to another
Metabolism - another section informs us what metabolism is.
Mychart - component with chart data. There is a comparative data with daily demand calories and your consumed calories
Product - This section allows us to change the grammage our daily calories.
Result - component calculating how many calories containing carbs, protein and fats  
Footer - footer
Installation process
npx create-react-app „nazwa apki”
npm i --save lodash
npm install react-router-dom
npm install history

### Usage process 
1. Read the information on the website
2. There is a calculator at the bottom of the page
3. Fill in the form with your details
4. After press button “sex” and check the data below
5. Choose “oblicz” to count your demanded calories. You will be redirected to another
    subpage.  
6. Add in English food you ate. App render sum with all of the nutritions data. You
    can change the grammage if you want. When you finish scroll down to
    check the chart with the compared data.


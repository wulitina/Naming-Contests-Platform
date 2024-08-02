#  Full-Stack JavaScript Development: MongoDB, Node, and React
This is the repository for Full-Stack JavaScript Development: MongoDB, Node, and React. 

This is full-stack JavaScript development by building a web application with MongoDB, Node.js, and React.js.
###  Functionality
- RESTAPI
- List/Item Views
- Navigation (&History)
- Server-side Rendering
- Mutating Data

### The Stack
#### MangoDB
- Collections and Documents
- Driver for Node
#### Node
- API Server (communicates with MangoDB)
- Web Server (static and dynamic)
#### React
- User Interfaces
- State, events, side effects
- Server-side
- Navigation and History (DOM API)

  ![img.png](src%2Freadme-pic%2Fimg.png)
  ![img_1.png](src%2Freadme-pic%2Fimg_1.png)
### OverView
#### Getting started
- Setup and Structure 
- Web Server (Express)
- Bundling code (WebPack)
- Test Data
#### React Fundamentals
- JSX and components
- Props, state, events, side effects
#### Working with Data
- API
- Using API endpoints in React
- Server-side rendering


```bash
npm install
npm audit fix --force
npx tsc -v

 npm run dev:server
 npm run dev:bundler
 docker-compose up
```




### Reference Text

#### package.json scripts

```
  "scripts": {
    "dev:server": "tsnd src/server/server.ts",
    "dev:bundler": "webpack -w --mode=development"
  },
```

#### package.json dependencies

```
  "dependencies": {
    "axios": "^0.27.2",
    "cors": "^2.8.5",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "mongodb": "^4.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "ts-loader": "^9.3.1",
    "typescript": "^4.7.4",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^5.33.0",
    "eslint": "^8.22.0",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.7.1",
    "ts-node-dev": "^2.0.0"
  }
```

#### Mock Data

```json
{
  "contests": [
    {
      "id": "cognitive-building-bricks",
      "categoryName": "Business/Company",
      "contestName": "Cognitive Building Bricks"
    },
    {
      "id": "educating-people-about-sustainable-food-production",
      "categoryName": "Magazine/Newsletter",
      "contestName": "Educating people about sustainable food production"
    },
    {
      "id": "big-data-analytics-for-cash-circulation",
      "categoryName": "Software Component",
      "contestName": "Big Data Analytics for Cash Circulation"
    },
    {
      "id": "free-programming-books",
      "categoryName": "Website",
      "contestName": "Free programming books"
    }
  ]
}
```
### More Features in The future
- TypeScript
- GraphQL
- Voting on names
- Authentication
- Bounties and tipping

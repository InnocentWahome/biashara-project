# Project - (client & server)

> Biashara System

## Installation 

##### Clone the git repository
```
git clone https://github.com/InnocentWahome/invoice-project.git
```

## Installation server


##### Setup environment variables
```
cp .env.example .env
```
##### Install project dependencies
```
npm install
```
##### Create database migration
```
node ace migration:run
```

##### Initialize faker db data
```
node ace db:seed
```
##### Initialize development server
```
npm run dev
```

## Installation client

##### Install project dependencies
```
npm install
```
##### Initialize development server
```
npm run develop || gatsby develop
```
##### Run production
```
npm run build || gatsby build
```

##### Author
```
- [Innocent Wahome](mailto: innocentwahome@gmail.com)
```
This reproduces a bug I encountered using Apollo Server and the latest version of @types/express

### @types/express@4.17.11

The following behaves as expected

```
npm i @types/express@4.17.11
npx tsc index.ts --esModuleInterop --skipLibCheck --noEmit --strict
```

### @types/express@4.17.12

The following throws an error

```
npm i @types/express@4.17.12
npx tsc index.ts --esModuleInterop --skipLibCheck --noEmit --strict

index.ts:12:26 - error TS2322: Type 'Express' is not assignable to type 'Application'.
  Types of property 'get' are incompatible.
    Type '((name: string) => any) & IRouterMatcher<Express, any>' is not assignable to type '((name: string) => any) & IRouterMatcher<Application, any>'.      
      Type '((name: string) => any) & IRouterMatcher<Express, any>' is not assignable to type 'IRouterMatcher<Application, any>'.
        Types of parameters 'name' and 'path' are incompatible.
            Type 'RegExp' is not assignable to type 'string'.

12 server.applyMiddleware({ app });
                            ~~~

  node_modules/apollo-server-express/dist/ApolloServer.d.ts:15:5
    15     app: express.Application;
           ~~~
    The expected type comes from property 'app' which is declared here on type 'ServerRegistration'


Found 1 error.
```
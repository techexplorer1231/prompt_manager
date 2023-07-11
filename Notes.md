##### Serverless rendering in mongoDB

- The "models" object is provided bu the Mongoose library and stores all the registered models.
- If a model named "User" already exists in the "models" object, it assigns that existing model to the "User" variable.
- This prevents redefining the model and ensures that the existing model is reused.

- If a model named "User" does not exist in the "models" object, the "model" function from Mongoose is called to create a new model.
- The newly created model is then assigned to the "User" variable and stored in the "models" object.

- The "model" function takes two arguments:

  - The first argument is the name of the model.
  - The second argument is the schema that defines the structure of documents in the collection.

- The "model" function returns a model object that can be used to query the database for documents.

```js
const User = models.User || model("User", UserSchema);

export default User;
```

# API Endpoints

## Users

```typescript
interface IUserData {
	name: string;
	age: number;
}

interface IUser extends IUserData {
	id: string;
}

"GET /users/ - Return all list of users."
Interface: () => IUser[];

"Get /users/:id - Return specific user by id."
Interface: () => IUser;

"POST /users/ - Add new user with uniq id. Return new user."
Interface: (data: IUserData) => IUser;

"PATCH /users/:id - update specific user by id. Return new user."
Interface: (data: IUserData) => IUser;

"DELETE /users/:id - Remove specific user by id."
Interface: () => void;
```

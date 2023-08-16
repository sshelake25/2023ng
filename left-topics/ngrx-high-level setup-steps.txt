Setting up NgRx in an Angular application involves several steps. 
This guide will help you establish the essential aspects of NgRx: Store, Actions, Reducers, and Effects (if needed).

### Step 1: Install the necessary NgRx libraries

Using the Angular CLI, install the required packages:

```bash
ng add @ngrx/store
```

If you're planning to use effects (for handling side effects):

```bash
ng add @ngrx/effects
```

For developer tools (recommended for debugging):

```bash
ng add @ngrx/store-devtools
```

### Step 2: Set up the Store

Create a file to represent the main shape of your application state. 

For instance, let's assume you're building a to-do app:

```typescript
// src/app/state/app.state.ts

export interface AppState {
  todos: Todo[];
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

### Step 3: Create Actions

Actions describe unique events that occur in the application. Create a file for your actions:

```typescript
// src/app/state/todo.actions.ts

import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[TODO] Add',
  props<{ title: string }>()
);

// Similarly, you can create actions for UPDATE, DELETE, etc.
```

### Step 4: Create Reducers

Reducers take the current state and an action, then return a new state:

```typescript
// src/app/state/todo.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { addTodo } from './todo.actions';

export const initialState: AppState = {
  todos: []
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now(), title, completed: false }]
  }))
);
```

Then, in your main app module or a feature module, register the reducers:

```typescript
// src/app/app.module.ts

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo.reducer';

@NgModule({
  imports: [
    // ... other imports
    StoreModule.forRoot({ todos: todoReducer })
  ],
  // ...
})
export class AppModule { }
```

### Step 5: Set up Effects (optional)

If you've installed `@ngrx/effects`, create your effects:

```typescript
// src/app/state/todo.effects.ts

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { addTodo } from './todo.actions';

@Injectable()
export class TodoEffects {

  // Define your effects here
  
  constructor(private actions$: Actions) {}
}
```

Then, register the effects in your module:

```typescript
// src/app/app.module.ts

import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  imports: [
    // ... other imports
    EffectsModule.forRoot([TodoEffects])
  ],
  // ...
})
export class AppModule { }
```

### Step 6: (Optional) Configure Store Devtools

If you've installed `@ngrx/store-devtools`, add it to your module imports:

```typescript
// src/app/app.module.ts

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // ... other imports
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  // ...
})
export class AppModule { }
```

### Step 7: Use NgRx in Components and Services

Now, you can dispatch actions, select data from the store, and utilize effects in your Angular components and services.

This guide provides a basic setup to get started with NgRx. As your application grows, you may want to refine your state management further, using additional NgRx features and best practices.
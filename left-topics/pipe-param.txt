ng generate pipe capitalize

----------------------

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value.replace(/\b\w/g, char => char.toUpperCase());
  }
}

---------------------
<div>{{ 'hello world' | capitalize }}</div>


===================================

Let's modify the `capitalize` pipe to accept a parameter that specifies whether only the first word in the string should be capitalized 
or if every word should be capitalized.

### 1. Modify the Pipe's transform method

We'll adjust the `transform` method to accept an additional parameter named `allWords`. If `allWords` is `true`, every word in the string will be capitalized. If it's `false` or not provided, only the first word will be capitalized.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, allWords?: boolean): string {
    if (!value) return value;

    if (allWords) {
      return value.replace(/\b\w/g, char => char.toUpperCase());
    } else {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  }
}
```

### 2. Using the Parameterized Pipe in a Component

Now, you can use the `capitalize` pipe with or without the parameter.

To capitalize only the first letter of the first word:

```html
<div>{{ 'hello world' | capitalize }}</div>
```

Output:

```
Hello world
```

To capitalize the first letter of every word:

```html
<div>{{ 'hello world' | capitalize:true }}</div>
```

Output:

```
Hello World
```

This modification makes the pipe more flexible and allows for multiple capitalization styles.


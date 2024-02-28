# Proto SSRG DOM Strict

> Experimental

SSRG DOM Strict is responsible for converting vanilla JSX/TSX into HTML. It supports only a strict subset of HTML elements (no deprecated elements, for example), certain attributes are required, certain elements will have default attributes set, and certain semantic elements will require particular child elements and throw errors if invalid ones are used.

All of this is to ensure users create accessible and performant websites by default.

## Features

- Only a subset of HTML elements are allowed (deprecated elements are disabled).
- Default attributes added to certain elements (e.g., the img element has loading="lazy").
- Permitted content checks based on MDN docs (certain elements can only contain specific children).
- Required children elements (forms need a submit button or input).

## Installation

```
npm install @protodigital/ssrg-dom-strict
```

## Example TSX

```tsx
import * as SSRG from "@protodigital/ssrg-dom-strict";
import Button from "./Button.tsx";

const Hero: SSRG.FC = () => {
  return (
    <section>
      <div class="max-w-2xl w-full mx-auto">
        <h1>Welcome to JSX DOM</h1>
        <Button
          data={{
            foo: "world",
          }}
        >
          Hello
        </Button>
      </div>
    </section>
  );
};
```

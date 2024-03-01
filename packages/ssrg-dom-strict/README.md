# Proto SSRG DOM Strict

> Experimental

SSRG DOM Strict is responsible for converting vanilla JSX/TSX into HTML. It supports only a strict subset of HTML elements (no deprecated elements, for example), certain attributes are required, certain elements will have default attributes set, and certain semantic elements will require particular child elements and throw errors if invalid ones are used.

All of this is to ensure users create accessible and performant websites by default.

## Features

- Only a subset of HTML elements are allowed (deprecated elements are disabled).
- Default attributes added to certain elements (e.g., the img element has loading="lazy").
- Disable runtime attribute and element enabled checks when `NODE_ENV` is set to `production`.
- Permitted content checks based on MDN docs (certain elements can only contain specific children). (coming soon)
- Required children elements (forms need a submit button or input). (coming soon)

## Installation

```
npm install @protodigital/ssrg-dom-strict
```

## Setup

> The JS setup hasnt been considered yet, so its recommended to only use this within TS.

After installing the package, add the following to your `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "SSRG.createElement",
    "jsxFragmentFactory": "SSRG.Fragment"
  }
}
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

> Make sure you `import * as SSRG` at the top of each TSX file.

### Render to string

This is just syntactic sugar, its the same as calling the component directly. Its entirely up to you which way you would prefer to do this.

```typescript
import SSRG from "@protodigital/ssrg-dom-strict";
import Layout from "./components/Layout.jsx";

const html = SSRG.renderToString(Layout, {
  title: "Example prop",
});

const withChildren = SSRG.renderToString(Layout, {
  title: "Example prop",
  children: [
    SSRG.renderToString(Button, {
      data: {
        foo: "bar",
      },
    }),
  ],
});

// The examples above are the same as doing the following:

const noSugar = Layout({
  title: "Example prop",
  children: [
    Button({
      data: {
        foo: "bar",
      },
    }),
  ],
});
```

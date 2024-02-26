# Proto SSRG DOM Strict
> Experimental

SSRG DOM Strict is responsible for turning vanilla JSX/TSX into HTML. It only supports a strict subset of HTML elements (no depreciated elements for example), certain attributes are required, certain elements will have default attributes set and certain semantic elements will require particular child elements.

All of this is to ensure users create accessible and performant websites by default.

## Rules & Defaults

The plan isnt to go crazy on these rules and defaults, we will start with a small group of obvious improvements and increase them as the project matures.

- Attributes should only be required by elements if absolutely necessary Ie:
    - An input should explicitly require id, name, type, aria-labelledby, aria-describedby and require attributes to be valid
    - The img element requires the loading, alt attributes
    - Labels should have a for attribute
    - Anchor elements require a href, if the target is blank then also a rel
    - Iframes should require a title attribute
- Certain semantic elemments should require other elements as children Ie:
    - Forms should require a button or input of type submit
- Smart defaults Ie:
    - An img loading attribute of lazy should be added by default, if you pass one it overides this
    - Anchor lements should default to target _self

There is a decision to be made between when smart defaults should be used vs when you should be required to explicitly add the attribute.

## Example

```tsx
import * as SSRG from "@protodigital/ssrg-dom-strict";
import Button from './Button.tsx";

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
    )
}
```
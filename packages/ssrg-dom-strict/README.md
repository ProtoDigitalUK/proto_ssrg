# Proto SSRG DOM Strict

SSRG DOM Strict is responsible for turning vanilla JSX/TSX into HTML. It offers a strict subset of elements and attributes that are allowed to ensure an accessible and modern web experience.

## Example

### Input TSX

```tsx
import Button from './Button.tsx";

const Hero = (
    <section>
        <div class="max-w-2xl w-full mx-auto">
            <h1 class="">Welcome to JSX DOM</h1>
            <Button title={"Click me"} />
        </div>
    </section>
)
```

### Output HTML

```html
<section>
    <div class="max-w-2xl w-full mx-auto">
        <h1 class="">Welcome to JSX DOM</h1>
        <button>
            Click me
        </button>
    </div>
</section>
```
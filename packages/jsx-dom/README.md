# Proto JSX DOM

JSX DOM is responsible for turning vanilla JSX/TSX into HTML.

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
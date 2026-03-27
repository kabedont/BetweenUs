# BetweenUs Notes 🌷

### 1/24/26
**What I learned:**
- to "remember" things, components use *state* (import first before use)
    - *value*: what's displayed right now (starts as null/empty)
    - *setValue*: function to change what's displayed
    - The *null* passed to *useState* is used as the initial value for this state variable ("give me a storage box starting empty")
```jsx
import {useState} from 'react';
function Square(){
    const [value, setValue] = useState(null);
}
```

### 1/27/26
**What I learned:**
- move the useState function UP from square to board function allows

### 2/13/26
**What I learned:**
- data flows in one direction:
    - Click → setSelectedSize → State updates → Components re-render → Visual updates

### 2/15/26
**What I learned:**
- template literals (backtick (`))
    - `'grid-option ${grid === "2x2" ? "selected" : ""}'`
        - Step-by-step:
            - `'` → Start template literal
            - `grid-option` → Regular text
            - `${ ... }` → JavaScript expression goes here
            - `grid === "2x2" ? "selected" : ""` → If true, add "selected", if false add nothing
            - `'` → End template literal
        - Results:
            - If 2x2 selected: `'grid-option selected'`
            - If not selected: `'grid-option '` (with space at end - harmless!)

### 2/16/26
**What I learned:**
- differences between important .css concepts
    - FLEX: A layout mode that controls how children are arranged
    - MARGIN: Space OUTSIDE an element, between it and other elements
    - GAP: Space BETWEEN children INSIDE a flex or grid container

### 3/3/26
**Visual-only effects**
- `transform: scale()` makes element bigger/smaller
- `box-shadow` adds glow/shadow
- `outline` adds line outside border
- `filter` adds visual effects
- `opacity` changes transparency

### 3/6/26
**When doing math with strings**
- Convert to numbers as early as possible if you're going to do math with them
    ```jsx
    const [rows, cols] = gridSize.split('x').map(Number); 
    const totalSlots = rows * cols;
    ```
- `.map()` goes to every element in the array and converts whatever state they're at to what's inside the bracket

| Step | What happens | Example ("3x4") |
|:---:|:---:|:---:|
| 1 | `gridSize.split('x')` | `["3", "4"]` |
| 2 | `.map(Number)` | `[3, 4]` |
| 3 | `const [rows, cols] = ...` | `rows = 3, cols = 4` |

### 3/7/26
**Understanding Code** 
```jsx
{Array.from({ length: totalSlots }).map((_, index) => (
  <button key={index} className='slots'>+</button>
))}
```
| Step | Code | What it does | Example (`totalSlots = 4`) |
|:---|:---|:---|:---|
| 1 | `Array.from({ length: totalSlots })` | Creates an array with `totalSlots` empty slots | `[empty, empty, empty, empty]` |
| 2 | `.map((_, index) => ...)` | Loops through each empty slot | Loop runs 4 times |
| 3 | `_` | Placeholder for the current item (unused) | `_` = `undefined` |
| 4 | `index` | Current position number | 0, 1, 2, 3 |
| 5 | `key={index}` | Unique identifier React needs for lists | `key=0`, `key=1`, etc. |
| 6 | `<button>+</button>` | The JSX returned for each loop | One button per slot |


### 3/8/26
**css in .jsx**
- `<div className='photo-grid' style={{gridTemplateColumns: 'repeat(${cols}, 1fr)'}}>`
    - ` backticks create a string, so it's not read by the jsx, but the css
    - `${cols}` have an $ bc it's inside a string

**borders in css layout:**
- `border: {width} {style} {color};`

### 3/12/26
**using useRef**
- `useRef` is a React hook that gives you a mutable object with a `.current` property that persists across re-renders.
- FORMAT: `const fileInputRef = useRef(null);`
    - `useRef()` - Creates a ref object
    - `(null)` - Initial value (can be anything)
    - `fileInputRef` - The ref object you'll use
- `fileInputRef.current.click();`
    - `fileInputRef.current` - Gets the actual DOM input element
    - `.click()` - Programmatically clicks it — opens file picker  

🔄 `useState` vs `useRef`

| Feature | `useState` | `useRef` |
|---------|------------|----------|
| **Re-renders when changed** | ✅ Yes | ❌ No |
| **Use case** | Values that affect UI | Values that don't affect UI |
| **Examples** | Form inputs, toggles, counters | DOM elements, timers, previous values |

### Why This Matters for File Upload

We don't want the whole component to re-render just because we clicked a file input — that's why we use `useRef` to store the reference to the DOM element.

### 3/14/26
**📝 React Events Cheat Sheet**
### 1️⃣ Understanding `event.target.files[0]`
```jsx
const file = event.target.files[0];
if (!file) return;
```
- `event` — The event object from the input
- `event.target` — The DOM element that triggered the event (the file input)
- `event.target.files` — A list of selected files
- `[0]` — Gets the first file (since we only allow one)
- `if (!file) return;` — Exit if user canceled (no file selected)

### 2️⃣ When Do You Use `event`?
- What file was selected → `event.target.files[0]`
- What user typed → `event.target.value`
- Mouse position → `event.clientX, event.clientY`
- Which key was pressed → `event.key`
- Stop form refresh → `event.preventDefault()`

Don't use event when you just need to know something happened:
`<button onClick={() => console.log("clicked")}>`

### 3️⃣ The Simple Rule
- Use event when you need details about what happened.
- Don't use it when you just need to know that it happened.

### 4️⃣ Division of Labor: `event` vs `useState`
- `event` -> Reach into the DOM and grab the data
- `useState` -> Store that data in React's memory

### 3/15/26
**what i learned**
```jsx
const updatedPhotos = [...photos]; //creates brand new copy of photos array, stores that copy in a new variable
updatedPhotos[selectedSlot] = imageUrl; //go to specific slot clicked, put image URL in it 
setPhotos(updatedPhotos); //tells React: "Here's a new array", the copy with the image inserted
```
- Never mutate state directly. Always create a new copy and set state to that copy.

### 3/16/26
- A `<textarea>` is an HTML element used for **multi-line text input**. Think of it like `<input>`, but for longer text.
**key attributes**
- `placeholder` → shows hint text when empty
    - Example: `placeholder="Add a description..."`
- `value` → controls what text is inside
    - Example: `value={description}`
- `onChange` → runs when user types
    - Example: `onChange={(e) => ...}`
- `rows` → sets height (number of lines)
    - Example: `rows={4}`
- `disabled` → makes it read-only
    - Example: `disabled={true}`

🧠 What is e.target.value?
- `e` = event object from `onChange`
- `e.target` = the `<textarea>` element
- `e.target.value` = current text inside it
`(e) => setText(e.target.value)`
👉 Meaning:
"Take whatever is currently typed and save it to state."

example using my case:
```jsx
<textarea
  placeholder="Add a description..."
  value={description[index] || ''}  //shows existing description or empty if none
  onChange={(e) => {
    const copy = [...description];  //creates a copy of the array (important in React)
    copy[index] = e.target.value;   //updates the specific slot
    setDescription(copy);           //saves it back to state
  }}
/>
```

💡 Key Idea
- A controlled `<textarea>` means: the UI is always synced with React state


### 3/28/26
**`async` and `await` functions**
- What is `async`?
    - `async` makes a function "asynchronous" — meaning it can take time to finish
    - Think of it like ordering food: you order, get a number, and wait while food is prepared

- What is `await`?
    - `await` pauses the function until something completes
    - It only works inside an async function

- When to use `async`/`await`:
    - Uploading files (takes time)
    - Fetching data from a server
    - Saving to a database
    - Any task that involves waiting for a response

- Why it matters:
    - Without `async`, JavaScript would try to use the result before it exists
    - With `async`, it waits patiently for the result to come back

Example:
```jsx
async function uploadImage(file) {
const result = await supabase.storage.upload(file)
return result
}
```

- What's happening:
    - `async` marks the function as one that can wait
    - `await` tells it: "pause here until upload finishes"
    - After upload completes, the function continues and returns the result

- Simple rule:
    - If your code does something that takes time (like talking to a server), use `async`/`await`.
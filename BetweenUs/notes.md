# BetweenUs Notes 🌷

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
- Step	What happens	            Example ("3x4")
- 1	    gridSize.split('x')	        ["3", "4"]
- 2	    .map(Number)	            [3, 4]
- 3	    const [rows, cols] = ...	rows = 3, cols = 4



# Tic Tac Toe Tutorial Notes 🌷

### Day 1: 1/22/26
**What I learned:**
- you define *className="..."* on HTML elements (like `<button>`, `<div>`) that need CSS styling. 


### Day 2: 1/24/26
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

### Day 3: 1/27/26
**What I learned:**
- move the useState function UP from square to board function allows
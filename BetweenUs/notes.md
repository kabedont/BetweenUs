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
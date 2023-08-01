# Yawning Maw

## Code Style

### Code Organization

- Components are bucketed by page (such as `restaurantDetails` or `restaurantIndex`). Each may have a top-level `_main.tsx` or `_loading.tsx`. These top-level components should only be concerned with layout of the major page components.

### NextJS

- ` "use client"`` should not be used in  `app`directory. The`app`directory should be reserved only for Server Components.`"use client"`should be used only in`components` directory.

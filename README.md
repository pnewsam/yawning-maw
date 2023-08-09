# Yawning Maw

**Yawning Maw is intel for foodies**.

Takes 10 minutes to find a restaurant? Let's cut that to 5. That's all we're trying to do here -- save you 5 minutes.

## Overview

Yawning Maw is a **full-stack NextJS application** deployed on Vercel and Supabase. As much as possible, my intention is to keep this application dead-simple. That means as few dependencies as possible - both in terms of code packages, and managed services. This is the current stack:

- Frontend: React (Typescript) with NextJS
  - Styling: TailwindCSS
  - Components: shadcn/ui Components
- Backend: React Server Components with NextJS
- Deployment: Vercel
- Database: Supabase Postgres
- Authentication/Authorization: Supabase Auth

There are cases where I could improve on costs or performance by bringing in , but in all cases I am erring on the side of limiting complexity. ie. Instead of hitting S3 directly, I will use Supabase Storage so that there is one less dashboard a developer might have to access/understand.

## Product Posture

The core idea here is **signal over noise**. Most restaurant recommendation resources have an abundance of noise -- due to overly liberalizing user contributions, or

## Code Style

### Code Organization

- Components are bucketed by page (such as `restaurantDetails` or `restaurantIndex`). Each may have a top-level `_main.tsx` or `_loading.tsx`. These top-level components should only be concerned with layout of the major page components.

### NextJS

- ` "use client"`` should not be used in  `app`directory. The`app`directory should be reserved only for Server Components.`"use client"`should be used only in`components` directory.

## package.json

- The `encoding` package under devDependencies was added only due to a compilation warning detailed here: https://github.com/supabase/supabase-js/issues/612 -- if the issue is ever resolved the package may be removeable.

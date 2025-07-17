# React Iskelet

[![npm version](https://badge.fury.io/js/react-iskelet.svg)](https://badge.fury.io/js/react-iskelet)

React Iskelet(iskelet means skeleton in Turkish), provides a tiny skeleton loaders.

<img width="1296" alt="react-skeleton-loader" src="https://user-images.githubusercontent.com/10114716/196992207-ab629a0c-990e-4e63-b6bb-5952e1327da1.png">

## Usage

```bash
yarn add react-iskelet
#or
npm i react-iskelet
```

```tsx
import Skeleton from "react-iskelet";

// Basic usage
<Skeleton type="text" />
<Skeleton type="text" count={5} />

// Custom dimensions
<Skeleton type="avatar" width={80} height={80} />
<Skeleton type="thumbnail" width="10rem" height="8rem" />
<Skeleton type="text" width="50%" height="1rem" />

// Multiple items with custom size
<Skeleton type="text" count={3} width="90%" height="0.8rem" />
```

Skeleton component extended with **div** element, allows manipulating **div** attributes like `className.`

## Props

| Props   | Type             | Required | Description |
| ------- | ---------------- | -------- | ----------- |
| type    | Type             | ✓        | Skeleton type (text, title, thumbnail, avatar) |
| count?  | number           | ✖        | Number of skeleton items to render |
| width?  | string \| number | ✖        | Custom width (px as number or any CSS value as string) |
| height? | string \| number | ✖        | Custom height (px as number or any CSS value as string) |

## Available Types

| Type      |
| --------- |
| text      |
| title     |
| thumbnail |
| avatar    |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

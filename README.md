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

<Skeleton type={option} />;
<Skeleton type="text" count={5} />;
```

Skeleton component extended with **div** element, allows manipulating **div** attributes like `className.`

## Props

| Props  | Type   | Required |
| ------ | ------ | -------- |
| type   | Type   | ✓        |
| count? | number | ✖        |

## Available Types

| Type      |
| --------- |
| text      |
| title     |
| thumbnail |
| avatar    |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

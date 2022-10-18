# React Iskelet

[![npm version](https://badge.fury.io/js/react-iskelet.svg)](https://badge.fury.io/js/react-iskelet)

React Iskelet(iskelet means skeleton in Turkish), provides a tiny skeleton loaders.

## Usage

![react-iskelet](https://user-images.githubusercontent.com/10114716/164973243-ae4807a0-4b77-4ba1-9c20-5600b17afa9a.gif)

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
| type   | string | ✓        |
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

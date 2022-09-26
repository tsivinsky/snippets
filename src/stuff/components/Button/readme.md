# Button

Simple button element with `as` prop to use any HTML element or React component

### Requirements

- [`react-polymorphic-types`](https://www.npmjs.com/package/react-polymorphic-types)

### Usage

```tsx
const AnotherComponent = ({ children }) => {
  return <div>{children}</div>;
};

const Component = () => {
  return (
    <>
      <Button as="a">Now, Im a link</Button>
      <Button as={AnotherComponent}>And im an AnotherComponent</Button>
    </>
  );
};
```

# Компоненты

## [Button](./Button.tsx)

Простая кнопка с параметром `as`, позволяющий использовать любой html элемент или React компонент вместо кнопки.

### Требования

- [`react-polymorphic-types`](https://www.npmjs.com/package/react-polymorphic-types)

### Использование

```tsx
const AnotherComponent = ({ children }) => {
  return <div>{children}</div>;
};

const Component = () => {
  return (
    <>
      <Button as="a">Я теперь ссылка</Button>
      <Button as={AnotherComponent}>А я совершенно другой компонент</Button>
    </>
  );
};
```

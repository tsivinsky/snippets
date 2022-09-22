import React from "react";

import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicPropsWithoutRef,
} from "react-polymorphic-types";

export const ButtonDefaultElement = "button";

// NOTE: Добавляй кастомные пропсы для кнопки сюда
export type ButtonOwnProps = {};

export type ButtonProps<
  E extends React.ElementType = typeof ButtonDefaultElement
> = PolymorphicPropsWithRef<ButtonOwnProps, E>;

export type ButtonType = PolymorphicForwardRefExoticComponent<
  ButtonOwnProps,
  typeof ButtonDefaultElement
>;

export const Button: ButtonType = React.forwardRef(
  <E extends React.ElementType = typeof ButtonDefaultElement>(
    { as, children, ...props }: PolymorphicPropsWithoutRef<ButtonOwnProps, E>,
    ref: React.ForwardedRef<Element>
  ) => {
    const Element: React.ElementType = as || ButtonDefaultElement;

    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";

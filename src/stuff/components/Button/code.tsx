import React from "react";

import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithRef,
  PolymorphicPropsWithoutRef,
} from "react-polymorphic-types";

export const ButtonDefaultElement = "button";

const variantClasses = {};
const colorClasses = {};
const sizeClasses = {};

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonColor = keyof typeof colorClasses;
export type ButtonSize = keyof typeof sizeClasses;

// NOTE: Добавляй кастомные пропсы для кнопки сюда
export type ButtonOwnProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
};

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

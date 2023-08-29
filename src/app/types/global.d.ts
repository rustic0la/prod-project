declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';

// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
declare const __IS_DEV__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
declare const __API__: string;
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

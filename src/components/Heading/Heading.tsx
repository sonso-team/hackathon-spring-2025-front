import React from 'react';
import type { ReactElement } from 'react';
import './heading.scss';

interface HeadingPropsI {
  children: string | ReactElement;
  level: 1 | 2 | 3 | 4 | 5;
  mode?: 'default' | 'link';
  className?: string;
}

/*
  children - Текст который автоматически будет нужного размера либо компонент вручную;
  level: Размер текст от большего к меньшему;
  mode?: Передаем в случае нестандартного текста, например link;
  className?: Переопределение стилей;
*/

export const Heading: React.FC<HeadingPropsI> = ({ ...props }) => {
  const { level, children, mode = 'default', className = '' } = props;

  return (
    <h1
      className={`heading heading_level-${level} ${className} ${mode ? `heading${mode}` : ''}`}
    >
      {children}
    </h1>
  );
};

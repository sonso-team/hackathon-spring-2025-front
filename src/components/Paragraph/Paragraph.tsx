import React from 'react';
import type { ReactElement } from 'react';
import './paragraph.scss';

interface ParagraphPropsI {
  children: string | ReactElement;
  level: 1 | 2 | 3 | 4;
  mode?: 'default' | 'link';
  className?: string;
}

/*
  children - Текст который автоматически будет нужного размера либо компонент вручную;
  level: Размер текст от большего к меньшему;
  mode?: Передаем в случае нестандартного текста, например link;
  className?: Переопределение стилей;
*/

export const Paragraph: React.FC<ParagraphPropsI> = ({ ...props }) => {
  const { level, children, mode = 'default', className = '' } = props;

  return (
    <p
      className={`paragraph paragraph_level-${level} ${className} ${mode ? `paragraph_${mode}` : ''}`}
    >
      {children}
    </p>
  );
};

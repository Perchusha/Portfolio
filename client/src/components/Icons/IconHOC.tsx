import React, { KeyboardEvent, useRef } from 'react';
import { useKeyboardListener } from '../../utils';
import { IIcon, IHOCIcon } from './types';

const IconHOC = (IconComponent: React.ComponentType<IHOCIcon>) => (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  // TODO: add SVG common attributes
  const commonAttributes = {};

  return <IconComponent ref={svgRef} {...props} commonAttributes={{ ...commonAttributes }} />;
};

export default IconHOC;

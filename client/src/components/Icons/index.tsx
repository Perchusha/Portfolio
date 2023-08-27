import React, { useRef, KeyboardEvent } from 'react';
import { useKeyboardListener } from '../../utils';
import { IIcon } from './types';
import { StyledSVG } from './styled';

// TODO: add SVG factory
export const BrushIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="brush-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 -2 32 32"
      tabIndex={0}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-99.000000, -154.000000)" fill={props.color || '#000000'}>
          <path
            d="M128.735,157.585 L116.047,170.112 L114.65,168.733 L127.339,156.206 C127.725,155.825 128.35,155.825 128.735,156.206 C129.121,156.587 129.121,157.204 128.735,157.585 L128.735,157.585 Z M112.556,173.56 C112.427,173.433 111.159,172.181 111.159,172.181 L113.254,170.112 L114.65,171.491 L112.556,173.56 L112.556,173.56 Z M110.461,178.385 C109.477,179.298 105.08,181.333 102.491,179.36 C102.491,179.36 103.392,178.657 104.074,177.246 C105.703,172.919 109.763,173.56 109.763,173.56 L111.159,174.938 C111.173,174.952 112.202,176.771 110.461,178.385 L110.461,178.385 Z M130.132,154.827 C128.975,153.685 127.099,153.685 125.942,154.827 L108.764,171.788 C106.661,171.74 103.748,172.485 102.491,176.603 C101.53,178.781 99,178.671 99,178.671 C104.253,184.498 110.444,181.196 111.857,179.764 C113.1,178.506 113.279,176.966 113.146,175.734 L130.132,158.964 C131.289,157.821 131.289,155.969 130.132,154.827 L130.132,154.827 Z"
            stroke={props.color || '#000000'}
            strokeWidth="0.5"
          ></path>
        </g>
      </g>
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const CircleIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="circle-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={props.color || '#000000'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const EraserIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="eraser-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M5.50506 11.4096L6.03539 11.9399L5.50506 11.4096ZM3 14.9522H2.25H3ZM12.5904 18.4949L12.0601 17.9646L12.5904 18.4949ZM9.04776 21V21.75V21ZM11.4096 5.50506L10.8792 4.97473L11.4096 5.50506ZM13.241 17.8444C13.5339 18.1373 14.0088 18.1373 14.3017 17.8444C14.5946 17.5515 14.5946 17.0766 14.3017 16.7837L13.241 17.8444ZM7.21629 9.69832C6.9234 9.40543 6.44852 9.40543 6.15563 9.69832C5.86274 9.99122 5.86274 10.4661 6.15563 10.759L7.21629 9.69832ZM16.073 16.073C16.3659 15.7801 16.3659 15.3053 16.073 15.0124C15.7801 14.7195 15.3053 14.7195 15.0124 15.0124L16.073 16.073ZM18.4676 11.5559C18.1759 11.8499 18.1777 12.3248 18.4718 12.6165C18.7658 12.9083 19.2407 12.9064 19.5324 12.6124L18.4676 11.5559ZM6.03539 11.9399L11.9399 6.03539L10.8792 4.97473L4.97473 10.8792L6.03539 11.9399ZM6.03539 17.9646C5.18538 17.1146 4.60235 16.5293 4.22253 16.0315C3.85592 15.551 3.75 15.2411 3.75 14.9522H2.25C2.25 15.701 2.56159 16.3274 3.03 16.9414C3.48521 17.538 4.1547 18.2052 4.97473 19.0253L6.03539 17.9646ZM4.97473 10.8792C4.1547 11.6993 3.48521 12.3665 3.03 12.9631C2.56159 13.577 2.25 14.2035 2.25 14.9522H3.75C3.75 14.6633 3.85592 14.3535 4.22253 13.873C4.60235 13.3752 5.18538 12.7899 6.03539 11.9399L4.97473 10.8792ZM12.0601 17.9646C11.2101 18.8146 10.6248 19.3977 10.127 19.7775C9.64651 20.1441 9.33665 20.25 9.04776 20.25V21.75C9.79649 21.75 10.423 21.4384 11.0369 20.97C11.6335 20.5148 12.3008 19.8453 13.1208 19.0253L12.0601 17.9646ZM4.97473 19.0253C5.79476 19.8453 6.46201 20.5148 7.05863 20.97C7.67256 21.4384 8.29902 21.75 9.04776 21.75V20.25C8.75886 20.25 8.449 20.1441 7.9685 19.7775C7.47069 19.3977 6.88541 18.8146 6.03539 17.9646L4.97473 19.0253ZM17.9646 6.03539C18.8146 6.88541 19.3977 7.47069 19.7775 7.9685C20.1441 8.449 20.25 8.75886 20.25 9.04776H21.75C21.75 8.29902 21.4384 7.67256 20.97 7.05863C20.5148 6.46201 19.8453 5.79476 19.0253 4.97473L17.9646 6.03539ZM19.0253 4.97473C18.2052 4.1547 17.538 3.48521 16.9414 3.03C16.3274 2.56159 15.701 2.25 14.9522 2.25V3.75C15.2411 3.75 15.551 3.85592 16.0315 4.22253C16.5293 4.60235 17.1146 5.18538 17.9646 6.03539L19.0253 4.97473ZM11.9399 6.03539C12.7899 5.18538 13.3752 4.60235 13.873 4.22253C14.3535 3.85592 14.6633 3.75 14.9522 3.75V2.25C14.2035 2.25 13.577 2.56159 12.9631 3.03C12.3665 3.48521 11.6993 4.1547 10.8792 4.97473L11.9399 6.03539ZM14.3017 16.7837L7.21629 9.69832L6.15563 10.759L13.241 17.8444L14.3017 16.7837ZM15.0124 15.0124L12.0601 17.9646L13.1208 19.0253L16.073 16.073L15.0124 15.0124ZM19.5324 12.6124C20.1932 11.9464 20.7384 11.3759 21.114 10.8404C21.5023 10.2869 21.75 9.71511 21.75 9.04776H20.25C20.25 9.30755 20.1644 9.58207 19.886 9.979C19.5949 10.394 19.1401 10.8781 18.4676 11.5559L19.5324 12.6124Z"
        fill={props.color || '#000000'}
        stroke={props.color || '#000000'}
        strokeWidth="0.5"
      />
      <path d="M9 21H21" stroke={props.color || '#000000'} strokeWidth="2" strokeLinecap="round" />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const PaletteIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="palette-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 16 16"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <rect
        style={{
          opacity: 1,
          vectorEffect: 'none',
          fill: '#373737',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 5.20000005,
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeDashoffset: 5.20000005,
          strokeOpacity: 1,
        }}
        width="16"
        height="16"
        x="0"
        y="0"
      />
      <rect
        y="1"
        x="1"
        height="4.0000005"
        width="4.0000005"
        style={{
          display: 'inline',
          fill: '#5da1f3',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15466905,
        }}
      />
      <rect
        style={{
          display: 'inline',
          fill: '#5dd3f3',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15467715,
        }}
        width="4.0000005"
        height="4.0000005"
        x="6"
        y="1"
      />
      <rect
        y="1"
        x="11"
        height="4.0000005"
        width="4.0000005"
        style={{
          display: 'inline',
          fill: '#5df3e3',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15466905,
        }}
      />
      <rect
        style={{
          display: 'inline',
          fill: '#f35d5d',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15466905,
        }}
        width="4.0000005"
        height="3.999944"
        x="1"
        y="6"
      />
      <rect
        y="11"
        x="1"
        height="4.0000005"
        width="4.0000005"
        style={{
          display: 'inline',
          fill: '#f3c05d',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15466905,
        }}
      />
      <rect
        y="6"
        x="6"
        height="3.999944"
        width="4.0000005"
        style={{
          display: 'inline',
          fill: '#f36d99',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15466905,
        }}
      />
      <rect
        style={{
          display: 'inline',
          fill: '#d55df3',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15466905,
        }}
        width="4.0000005"
        height="3.999944"
        x="11"
        y="6"
      />
      <rect
        style={{
          display: 'inline',
          fill: '#d5f35d',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15467715,
        }}
        width="4.0000005"
        height="4.0000005"
        x="6"
        y="11"
      />
      <rect
        y="11"
        x="11"
        height="4.0000005"
        width="4.0000005"
        style={{
          display: 'inline',
          fill: '#8bf36d',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1.15467715,
        }}
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const SaveIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="save-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
        fill={props.color || '#000000'}
        stroke={props.color || '#000000'}
        strokeWidth="0.5"
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const SquareIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="square-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      tabIndex={0}
      style={{ borderRadius: '25%', ...props.styles }}
      onClick={props.onClick}
    >
      <rect width="330px" height="330px" fill={props.color || '#000000'} />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const UndoIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="undo-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M20 7H9C6.23857 7 4 9.23857 3.99999 12C3.99999 14.7614 6.23857 17 8.99999 17M20 7L17 4M20 7L17 10M16 17H13"
        stroke={props.color || '#000000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(-1,1) translate(-24,0)"
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const RedoIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="redo-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M20 7H9C6.23857 7 4 9.23857 3.99999 12C3.99999 14.7614 6.23857 17 8.99999 17M20 7L17 4M20 7L17 10M16 17H13"
        stroke={props.color || '#000000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const LineIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="line-icon"
      fill="#000000"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M3.293,20.707a1,1,0,0,1,0-1.414l16-16a1,1,0,1,1,1.414,1.414l-16,16A1,1,0,0,1,3.293,20.707Z"
        fill={props.color || '#000000'}
        stroke={props.color || '#000000'}
        strokeWidth="0.5"
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const CursorIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="cursor-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 24 24"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z"
        stroke={props.color || '#000000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const LinkedInIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="linkedin-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      fill={props.color || '#000000'}
      viewBox="0 0 32 32"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const GitHubIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="github-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 20 20"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-140.000000, -7559.000000)" fill={props.color || '#000000'}>
          <g transform="translate(56.000000, 160.000000)">
            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
          </g>
        </g>
      </g>
      <title>{props.tooltip || ''}</title>
    </StyledSVG>
  );
};

export const ReactIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);
  const color = props.color || '#000000';

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="react-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      viewBox="0 0 16 16"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        fillRule="nonzero"
        clipRule="nonzero"
        d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z"
        fill={color}
      />
      <path
        fillRule="nonzero"
        clipRule="nonzero"
        d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z"
        fill={color}
      />
      <path
        fillRule="nonzero"
        clipRule="nonzero"
        d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z"
        fill={color}
      />
      <path
        d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z"
        fill={color}
      />
    </StyledSVG>
  );
};

// TODO: change SVG
export const JavaScriptIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="javascript-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      fill={props.color || '#000000'}
      viewBox="0 0 13 13"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path d="M 11.714286,1 2.285714,1 C 1.575893,1 1,1.57589 1,2.28571 l 0,9.42858 C 1,12.42411 1.575893,13 2.285714,13 l 9.428572,0 C 12.424107,13 13,12.42411 13,11.71429 L 13,2.28571 C 13,1.57589 12.424107,1 11.714286,1 Z m -4.183929,9.35893 c 0,1.16786 -0.685714,1.70089 -1.684821,1.70089 -0.902679,0 -1.425,-0.46607 -1.692857,-1.03125 l 0.91875,-0.55446 c 0.176785,0.31339 0.3375,0.57857 0.725892,0.57857 0.369643,0 0.605358,-0.14464 0.605358,-0.70982 l 0,-3.83304 1.127678,0 0,3.84911 z m 2.667857,1.70089 c -1.047321,0 -1.725,-0.49821 -2.054464,-1.15178 L 9.0625,10.37768 c 0.241071,0.39375 0.557143,0.68571 1.111607,0.68571 0.466072,0 0.766072,-0.23303 0.766072,-0.55714 0,-0.38571 -0.305358,-0.52232 -0.822322,-0.75 L 9.836607,9.63571 C 9.022321,9.29018 8.483929,8.85357 8.483929,7.93482 c 0,-0.84643 0.645535,-1.48928 1.65,-1.48928 0.717857,0 1.232142,0.2491 1.601785,0.90267 l -0.878571,0.5625 C 10.664286,7.56518 10.455357,7.42857 10.13125,7.42857 c -0.329464,0 -0.538393,0.20893 -0.538393,0.48214 0,0.3375 0.208929,0.47411 0.69375,0.68572 l 0.28125,0.12053 c 0.958929,0.40983 1.497322,0.83036 1.497322,1.77322 0,1.0125 -0.798215,1.56964 -1.866965,1.56964 z" />
    </StyledSVG>
  );
};

export const NodeJSIcon = (props: IIcon) => {
  const svgRef: React.RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);
  const color = props.color || '#000000';

  const onKeyDownHandler = (event: KeyboardEvent) => {
    props.onClick && props.onClick(event);
  };

  useKeyboardListener(svgRef, {
    Enter: onKeyDownHandler,
    ' ': onKeyDownHandler,
  });

  return (
    <StyledSVG
      ref={svgRef}
      id="nodejs-icon"
      width={props.width || '2.5vmin'}
      height={props.height || '2.5vmin'}
      fill={props.color || '#000000'}
      viewBox="0 0 30 30"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...props.styles }}
      onClick={props.onClick}
    >
      <path
        d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z"
        fill={color}
      />
      <path
        d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z"
        fill={color}
      />
    </StyledSVG>
  );
};

import { IIcon } from './types';

export const BrushIcon = (props: IIcon) => {
  return (
    <svg
      id="brush-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 -2 32 32"
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
    </svg>
  );
};

export const CircleIcon = (props: IIcon) => {
  return (
    <svg
      id="circle-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
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
    </svg>
  );
};

export const EraserIcon = (props: IIcon) => {
  return (
    <svg
      id="eraser-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
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
    </svg>
  );
};

export const PaletteIcon = (props: IIcon) => {
  return (
    <svg
      id="palette-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 16 16"
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
    </svg>
  );
};

export const SaveIcon = (props: IIcon) => {
  return (
    <svg
      id="save-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
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
    </svg>
  );
};

export const SquareIcon = (props: IIcon) => {
  return (
    <svg
      id="square-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      style={{ borderRadius: '25%', ...props.styles }}
      onClick={props.onClick}
    >
      <rect width="330px" height="330px" fill={props.color || '#000000'} />
      <title>{props.tooltip || ''}</title>
    </svg>
  );
};

export const UndoIcon = (props: IIcon) => {
  return (
    <svg
      id="undo-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
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
    </svg>
  );
};
export const RedoIcon = (props: IIcon) => {
  return (
    <svg
      id="redo-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
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
    </svg>
  );
};

export const LineIcon = (props: IIcon) => {
  return (
    <svg
      id="line-icon"
      fill="#000000"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
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
    </svg>
  );
};

export const CursorIcon = (props: IIcon) => {
  return (
    <svg
      id="cursor-icon"
      width={props.width || '24px'}
      height={props.height || '24px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
    </svg>
  );
};

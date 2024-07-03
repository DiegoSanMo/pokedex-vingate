interface IconProps {
  color?: string;
}

const defaultArrowColor = "#222222";

export const ArrowTop = ({ color }: IconProps) => {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      style={{
        color: color || defaultArrowColor,
      }}
      //   {...props}
    >
      <path d="M18.2 13.3L12 7l-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z" />
    </svg>
  );
};

export const ArrowBottom = ({ color }: IconProps) => {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      style={{
        color: color || defaultArrowColor,
      }}
      //   {...props}
    >
      <path d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z" />
    </svg>
  );
};

export const ArrowLeft = ({ color }: IconProps) => {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      style={{
        color: color || defaultArrowColor,
        transform: "rotate(-270deg)",
      }}
      // {...props}
    >
      <path d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z" />
    </svg>
  );
};

export const ArrowRight = ({ color }: IconProps) => {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="3em"
      width="3em"
      style={{
        color: color || defaultArrowColor,
        transform: "rotate(270deg)",
      }}
      // {...props}
    >
      <path d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z" />
    </svg>
  );
};

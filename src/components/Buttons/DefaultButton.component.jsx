import clsx from "clsx";
import { Icon } from "../Commons";

function DefaultButton({
  text,
  icon,
  type = "button",
  color = "primary",
  onClick = () => {},
  className,
  disabled = false,
  ...props
}) {
  if (!text && !icon) {
    return null;
  }

  const baseClasses =
    "px-4 py-0 rounded-xl inline-flex items-center gap-0 max-h-8 min-h-8 h-full text-xs leading-none font-light transition-all";

  const typeClasses = {
    success: "bg-green-500 text-white hover:bg-green-400",
    primary: "bg-sky-500 text-white hover:bg-sky-400",
    danger: "bg-red-500 text-white hover:bg-red-400",
    secondary:
      "bg-transparent text-black border-1 hover:border-gray-400 border-gray-200",
  };

  const handleClick = (e) => {
    if (type !== "submit") {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!disabled) onClick();
  };

  return (
    <button
      type={type}
      className={clsx(
        baseClasses,
        typeClasses[color] || typeClasses.neutral,
        {
          "opacity-40 cursor-not-allowed pointer-events-none": disabled,
          "cursor-pointer": !disabled,
        },
        className
      )}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
      {...props}
    >
      {icon && <Icon url={icon} />}
      {text}
    </button>
  );
}

export default DefaultButton;

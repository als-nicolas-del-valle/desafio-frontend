import Icon from "./Icon.component";
import clsx from "clsx";

function Badge({ text, icon, type = "success", className, ...props }) {
  if (!text && !icon) {
    return null;
  }

  const baseClasses =
    "px-4 py-0 rounded-full inline-flex items-center gap-0 max-h-5 min-h-5 h-full text-xs leading-none font-light";

  const typeClasses = {
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };
  return (
    <span
      className={clsx(
        baseClasses,
        typeClasses[type] || typeClasses.neutral,
        className
      )}
      {...props}
    >
      {icon && <Icon url={icon} />}
      {text}
    </span>
  );
}

export default Badge;

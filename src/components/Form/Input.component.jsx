import { Icon } from "../Commons";

function Input({ icon, ...props }) {
  return (
    <div className="flex flex-row items-center w-full bg-gray-50 border-b-2 border-gray-200 ">
      <Icon url={icon} />
      <input
        className="flex-grow outline-none bg-transparent text-gray-800 placeholder-gray-400 p-2 focus:bg-gray-100"
        {...props}
      />
    </div>
  );
}

export default Input;

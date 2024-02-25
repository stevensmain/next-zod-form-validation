import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOptions[];
  error?: string | null;
  placeholder?: string;
}

type SelectOptions = { label: string; value: string };

type SelectRef = ForwardedRef<HTMLSelectElement>;

export default forwardRef(function Select(
  {
    className,
    label,
    id,
    error,
    options,
    placeholder = "Select..",
    ...props
  }: SelectProps,
  ref: SelectRef
) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        ref={ref}
        {...props}
        className={clsx(
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
          className
        )}
      >
        <option value="" selected>
          {placeholder}
        </option>
        {options.map(({ label, value }, key) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </>
  );
});

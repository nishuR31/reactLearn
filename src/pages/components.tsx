import React from "react";
export default function Components() {
  return (
    <>
      <div>
        Here are info about the <b>Components</b> we have learned:
      </div>
      <p>
        Components are building blocks of React applications. They allow us to
        split the UI into independent, reusable pieces, and think of each
        component as a self-contained module that manages its own state and
        logic. It allows scalability,each maintain and update while maintaining
        a clean structure and clean code.
      </p>
      <p>
        Like I've created a button component, its reusable, dynamic, have
        options for logo and present style with custom styles and props too
      </p>
      <pre>{`
type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: Variant;
  icon?: string;
};
type Variant = \"primary\" | \"secondary\" | \"ghost\" | \"danger\" | \"success\";

const classes = {
  primary:
    \"dark:bg-black dark:text-white text-black bg-white rounded-md px-4 py-2 hover:bg-gray-500 transition-colors duration-500\",
  secondary:
    \"dark:bg-gray-600 dark:text-white text-white bg-gray-500 rounded-md px-4 py-2 hover:bg-gray-800 transition-colors duration-200\",
  ghost:
    \"bg-transparent dark:text-white text-black rounded-md px-4 py-2 hover:bg-blue-200 transition-colors duration-500\",
  danger:
    \"bg-red-300 text-red-800 dark:bg-red-800 dark:text-white rounded-md hover:bg-red-900 px-4 py-2 hover:text-white transition-colors duration-500\",
  success:
    \"bg-green-300 text-green-800 dark:bg-green-800 dark:text-white rounded-md hover:bg-green-900 px-4 py-2 hover:text-white transition-colors duration-500\",
};

export const Button = ({
  text,
  variant = \"primary\",
  type = \"button\",
  icon,
  ...props
}: buttonProps) => {
  return (
    <>
      <button
        type={type ?? \"button\"}
        name={text}
        title={text}
        className={classes[variant]}
        {...props}
      >
        {icon && (
          <img
            src={icon}
            alt={\`\${"text"} icon\`}
            className=\"mr-2 hidden lg:flex \"
          />
        )}
        <span className=\"flex\">{text}</span>
      </button>
  );
};`}</pre>
      <Button
        type="button"
        text="click"
        variant="primary"
        onClick={() => alert("Button Clicked")}
      />
      <Button
        type="submit"
        text="login"
        variant="secondary"
        onClick={() => alert("Login clicked")}
      />
      <Button
        type="reset"
        text="New?"
        variant="ghost"
        onClick={() => alert("New clicked")}
      />
      <Button
        type="reset"
        text="Save"
        variant="success"
        onClick={() => alert("Save clicked")}
      />
      <Button
        type="reset"
        text="Delete"
        variant="danger"
        onClick={() => alert("Delete clicked")}
      />
    </>
  );
}

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: Variant;
  icon?: string;
};
type Variant = "primary" | "secondary" | "ghost" | "danger" | "success";

const classes = {
  primary:
    "dark:bg-black dark:text-white text-black bg-white rounded-md px-4 py-2 hover:bg-gray-500 transition-colors duration-500",
  secondary:
    "dark:bg-gray-600 dark:text-white text-white bg-gray-500 rounded-md px-4 py-2 hover:bg-gray-800 transition-colors duration-200",
  ghost:
    "bg-transparent dark:text-white text-black rounded-md px-4 py-2 hover:bg-blue-200 transition-colors duration-500",
  danger:
    "bg-red-300 text-red-800 dark:bg-red-800 dark:text-white rounded-md hover:bg-red-900 px-4 py-2 hover:text-white transition-colors duration-500",
  success:
    "bg-green-300 text-green-800 dark:bg-green-800 dark:text-white rounded-md hover:bg-green-900 px-4 py-2 hover:text-white transition-colors duration-500",
};

export const Button = ({
  text,
  variant = "primary",
  type = "button",
  icon,
  ...props
}: buttonProps) => {
  return (
    <>
      <button
        type={type ?? "button"}
        name={text}
        title={text}
        className={classes[variant]}
        {...props}
      >
        {icon && (
          <img
            src={icon}
            alt={`${text} icon`}
            className="mr-2 hidden lg:flex "
          />
        )}
        <span className="flex">{text}</span>
      </button>
    </>
  );
};

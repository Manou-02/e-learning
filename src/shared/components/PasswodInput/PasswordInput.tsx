import { Form, Input } from "antd";
import { FC } from "react";

type InputType = {
  label: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  size?: "large" | "middle" | "small";
  required?: boolean;
  value?: any;
  onChange: (e: any) => void;
};

export const PasswordInput: FC<InputType> = ({
  name,
  label,
  errorMessage,
  placeholder,
  size = "large",
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-[10px] w-[400px]">
      <label htmlFor={name} className="font-semibold text-slate-800">
        {label}
        {required ? <span className="text-red-600"> *</span> : ""}
      </label>
      <Form.Item
        name={name}
        hasFeedback
        rules={[
          {
            required,
            message:
              errorMessage ?? `Le champ ${label?.toLowerCase()} est réquis.`,
          },
        ]}
      >
        <Input.Password
          id={name}
          onChange={(e: any) => onChange({ [name]: e?.target?.value })}
          name={name}
          size={size}
          value={value}
          placeholder={placeholder}
        />
      </Form.Item>
    </div>
  );
};

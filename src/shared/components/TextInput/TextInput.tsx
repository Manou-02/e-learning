import { Input, Form } from "antd";
import { FC, useState, useEffect } from "react";

type InputType = {
  label: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  size?: "large" | "middle" | "small";
  required?: boolean;
  value?: any;
  isDisable?: boolean;
  onChange: (e: any) => void;
  type?: string;
};

export const TextInput: FC<InputType> = ({
  name,
  label,
  errorMessage,
  placeholder,
  isDisable,
  size = "large",
  required = false,
  value,
  type = "text",
  onChange,
}) => {
  const [defaultValue, setDefaultValue] = useState<any>(value);

  useEffect(() => {
    setDefaultValue(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-[10px] w-[400px]">
      <label htmlFor={name} className="font-semibold text-slate-800">
        {label}
        {required ? <span className="text-red-600"> *</span> : ""}
      </label>
      <Form.Item
        hasFeedback
        name={name}
        rules={[
          {
            required,
            message:
              errorMessage ?? `Le champ ${label.toLowerCase()} est réquis.`,
          },
        ]}
        initialValue={value}
      >
        <div>
          <Input
            id={name}
            onChange={(e) => onChange({ [name]: e?.target?.value })}
            name={name}
            size={size}
            disabled={isDisable}
            value={defaultValue}
            // defaultValue={value}
            placeholder={placeholder}
          />
        </div>
      </Form.Item>
    </div>
  );
};


import { useController, Control, FieldValues, Path } from "react-hook-form"
import { Input as TextInput } from "./input.styles"


type InputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  type?: "password"
}

export function Input<T extends FieldValues>({ control, name, placeholder, type }: InputProps<T>) {

  const { field } = useController({
    control,
    name
  })

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      secureTextEntry={type === "password"}
    />
  )
}

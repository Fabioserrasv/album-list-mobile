import { TextInput, TextInputProps } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import { ContainerInput, Input, Button } from "./input-button.styles"
import { useCallback, useRef, useState, ReactNode } from "react";
import { InputButton } from "./InputButton";


type InputNumberButtonProps = TextInputProps & React.RefAttributes<TextInput> & {
  onAction?(value: number): Promise<void>;
  after?: ReactNode;
  min?: number;
  max?: number;
  initialValue?: number;
  onChangeText?(newValue: number): void;
}

export function InputNumberButton({
  value: valueInput,
  onChangeText: onChangeTextInput,
  min,
  max,
  initialValue,
  onAction,
  ...inputProps
}: InputNumberButtonProps) {
  const [valueInternal, setValueInternal] = useState<number | undefined>(initialValue);

  const valueTruthful = valueInput ?? valueInternal;

  const handleOnChangeText = useCallback((newText: string) => {
    const newValue = Number(newText);
    if (isNaN(newValue)) {
      return;
    }

    if (min && newValue < min) {
      return;
    }

    if (max && newValue > max) {
      return;
    }

    setValueInternal(newValue)
    onChangeTextInput?.(newValue)
  }, [onChangeTextInput, min, max]);

  const handleOnAction = useCallback(async (text: string) => {
    const value = Number(text);
    await onAction?.(value);
  }, [onAction])

  return (
    <InputButton
      value={valueTruthful?.toString()}
      onChangeText={handleOnChangeText}
      onAction={handleOnAction}
      {...inputProps}
    />
  )
}

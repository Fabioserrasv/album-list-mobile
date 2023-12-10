import { TextInput, TextInputProps } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import { ContainerInput, Input, Button } from "./input-button.styles"
import { useCallback, useRef, useState, ReactNode } from "react";


type InputButtonProps = TextInputProps & React.RefAttributes<TextInput> & {
  onAction?(text: string): Promise<void>;
  after?: ReactNode;
}

export function InputButton({
  value: valueInput,
  onChangeText: onChangeTextInput,
  onAction,
  after,
  ...inputProps
}: InputButtonProps) {
  const [valueInternal, setValueInternal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const valueTruthful = valueInput ?? valueInternal;
  const handleOnChangeText = useCallback((newText: string) => {
    setValueInternal(newText)
    onChangeTextInput?.(newText)
  }, [onChangeTextInput]);

  const handleOnSearch = useCallback(async () => {
    inputRef?.current?.blur();

    if (!onAction) {
      return;
    }

    setIsLoading(true);
    await onAction(valueTruthful);
    setIsLoading(false);
  }, [onAction, valueTruthful]);

  return (
    <ContainerInput>
      <Input
        value={valueTruthful}
        onChangeText={handleOnChangeText}
        ref={inputRef}
        {...inputProps}
      />
      {after && (
        <Button disabled={isLoading} onPress={handleOnSearch}>
          {after}
        </Button>
      )}
    </ContainerInput>
  )
}

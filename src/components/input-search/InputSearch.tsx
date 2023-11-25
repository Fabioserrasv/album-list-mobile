import { TextInput, TextInputProps } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import { ContainerInput, Input, Button } from "./input-search.styles"
import { useCallback, useRef, useState } from "react";

type InputSearchProps = TextInputProps & React.RefAttributes<TextInput> & {
  onSearch?(search: string): Promise<void>;
}

export function InputSearch({
  value: valueInput,
  onChangeText: onChangeTextInput,
  onSearch,
  ...inputProps
}: InputSearchProps) {
  const [valueInternal, setValueInternal] = useState("");
  const [isSearching, setIsSeaching] = useState(false);
  const inputRef = useRef<TextInput>(null)

  const valueTruthful = valueInput ?? valueInternal;
  const handleOnChangeText = useCallback((newText: string) => {
    setValueInternal(newText)
    onChangeTextInput?.(newText)
  }, [onChangeTextInput]);

  const handleOnSearch = useCallback(async () => {
    inputRef?.current?.blur();

    if (!onSearch) {
      return;
    }

    setIsSeaching(true);
    await onSearch(valueTruthful);
    setIsSeaching(false);
  }, [onSearch, valueTruthful]);

  return (
    <ContainerInput>
      <Input
        value={valueTruthful}
        onChangeText={handleOnChangeText}
        ref={inputRef}
        {...inputProps}
      />
      <Button disabled={isSearching} onPress={handleOnSearch}>
        <Ionicons name="search" size={18} color="white" />
      </Button>
    </ContainerInput>
  )
}

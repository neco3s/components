import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import AutoResizeTextArea from 'components/elements/AutoResizeTextArea/index'

interface AutoResizeTextAreaProps {
  id: string
  name: string
  placeholder?: string
}

export type AutoResizeTextAreaControlProps<T extends FieldValues> = AutoResizeTextAreaProps & UseControllerProps<T>

const AutoResizeTextAreaControl = <T extends FieldValues>({
  id,
  name,
  placeholder,
  control,
}: AutoResizeTextAreaControlProps<T>) => {
  const { field } = useController<T>({
    name,
    control,
  })

  const wrapCount = field.value
    .split('\n')
    .map((line: string) => Math.floor(line.length / 25))
    .reduce((a: number, b: number) => a + b, 0)
  const newLineCount = field.value.split('\n').length ?? 1
  const rows = wrapCount + newLineCount

  return (
    <AutoResizeTextArea id={id} value={field.value} placeholder={placeholder} rows={rows} onChange={field.onChange} />
  )
}

export default AutoResizeTextAreaControl

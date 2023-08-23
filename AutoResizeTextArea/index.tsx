import { ChangeEvent, useRef } from 'react'
import useAutoResizeTextArea from 'hooks/useAutoResizeTextArea'

interface AutoResizeTextAreaProps {
  id: string
  placeholder?: string
  value: string | undefined
  rows: number
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void
}

const AutoResizeTextArea: React.FC<AutoResizeTextAreaProps> = ({ id, placeholder, value, rows, onChange }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutoResizeTextArea(textAreaRef.current, value)

  return (
    <textarea
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      ref={textAreaRef}
      rows={rows}
      value={value}
      className="mb-5 border-none border-transparent focus:border-transparent focus:ring-0 w-full resize-none overflow-hidden outline-none mt-2"
    />
  )
}

export default AutoResizeTextArea

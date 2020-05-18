import React from 'react'
import { TextInput } from './TextInput'

export default {
  title: 'Forms/TextInput',
  parameters: {
    info: `
USWDS 2.0 TextInput component

Source: https://designsystem.digital.gov/components/form-controls/#text-input
`,
  },
}

export const defaultTextInput = (): React.ReactElement => (
  <TextInput id="input-type-text" name="input-type-text" type="text" />
)

export const withDefaultValue = (): React.ReactElement => (
  <TextInput
    id="input-value"
    name="input-value"
    type="text"
    defaultValue="Change me"
  />
)

export const withPlaceholder = (): React.ReactElement => (
  <TextInput
    id="input-placeholder"
    name="input-placeholder"
    type="text"
    placeholder="Enter value"
  />
)

export const error = (): React.ReactElement => (
  <TextInput id="input-error" name="input-error" type="text" error />
)

export const success = (): React.ReactElement => (
  <TextInput id="input-success" name="input-success" type="text" success />
)

export const disabled = (): React.ReactElement => (
  <TextInput id="input-disabled" name="input-disabled" type="text" disabled />
)

export const readonly = (): React.ReactElement => (
  <TextInput id="input-readonly" name="input-readonly" type="text" readOnly />
)

/*
export const small = (): React.ReactElement => (
  <TextInput id="input-type-text" name="input-type-text" type="text" small />
)

export const medium = (): React.ReactElement => (
  <TextInput id="input-type-text" name="input-type-text" type="text" medium />
)
*/

export const password = (): React.ReactElement => (
  <TextInput id="input-type-text" name="input-type-text" type="password" />
)

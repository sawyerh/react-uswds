import React, { useState } from 'react'
import classnames from 'classnames'
import { LanguageSelectorButton } from './LanguageSelectorButton'
import LanguageSelectorDropdown from './LanguageSelectorDropdown'

export type LanguageDefinition = {
  label: string
  label_local?: string
  attr: string
  on_click: string | (() => void)
}

export type LanguageSelectorProps = {
  label?: string
  langs: LanguageDefinition[]
  small?: boolean
  /**
   * Custom classes for the call-to-action
   */
  className?: string
  displayLang?: string
}

export const LanguageSelector = ({
  label,
  langs,
  small,
  className,
  displayLang,
  ...divProps
}: LanguageSelectorProps &
  JSX.IntrinsicElements['div']): React.ReactElement => {
  const containerClasses = classnames('usa-language-container', {
    [`usa-language--small`]: small !== undefined,
  })

  const [langIndex, setLangIndex] = useState(false)

  if (langs.length > 2) {
    const dropdownProps = { label, langs, small, displayLang }
    return (
      <div
        className={containerClasses}
        data-testid="languageSelector"
        {...divProps}>
        <LanguageSelectorDropdown {...dropdownProps} className={className} />
      </div>
    )
  } else {
    if (label) {
      console.warn(
        "LanguageSelector's label is not used when only two languages are available."
      )
    }
    const curLang =
      langs.find((langDef) => langDef.attr === displayLang) ||
      langs[Number(langIndex)]
    const onClickString: string =
      typeof curLang.on_click === 'string' ? curLang.on_click : ''
    const onClick =
      typeof curLang.on_click === 'string'
        ? () => {
            window.location.assign(onClickString)
          }
        : curLang.on_click
    return (
      <div
        className={containerClasses}
        data-testid="languageSelector"
        {...divProps}>
        <LanguageSelectorButton
          className={className}
          label={curLang.label}
          labelAttr={curLang.attr}
          onToggle={() => {
            onClick()
            if (!displayLang) setLangIndex((prevLangIndex) => !prevLangIndex)
          }}
        />
      </div>
    )
  }
}

export default LanguageSelector

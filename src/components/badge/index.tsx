import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import './index.less'

const classPrefix = `btl-badge`

export const dot = <React.Fragment />

export type BadgeProps = {
  /**
   * @description       徽标内容：如果传 null undefined '' 或不传，则不显示徽标；如果传 dot，会显示小红点
   * @default           -
   */
  content?: React.ReactNode | typeof dot
  /**
   * @description       徽标背景色
   * @default           -
   */
  color?: string
  /**
   * @description       徽标是否描边
   * @default           false
   */
  bordered?: boolean
  children?: React.ReactNode
  // wrapperClassName?: string
  // wrapperStyle?: React.CSSProperties
} & NativeProps<'--right' | '--top'>

export const Badge: FC<BadgeProps> = props => {
  const { content, color, children } = props

  const isDot = content === dot

  const badgeCls = classNames(
    classPrefix,
    !!children && `${classPrefix}-fixed`,
    isDot && `${classPrefix}-dot`,
    props.bordered && `${classPrefix}-bordered`
  )

  const element =
    content || content === 0
      ? withNativeProps(
          props,
          <div
            className={badgeCls}
            style={
              {
                '--color': color,
              } as BadgeProps['style']
            }
          >
            {!isDot && (
              <div className={`${classPrefix}-content`}>{content}</div>
            )}
          </div>
        )
      : null

  return children ? (
    <div
      className={`${classPrefix}-wrapper`}
    >
      {children}
      {element}
    </div>
  ) : (
    element
  )
}

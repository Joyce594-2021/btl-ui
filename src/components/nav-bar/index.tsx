import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { NativeProps, withNativeProps } from '../../utils/native-props';
import './index.less';

export type NavProps = {
  /**
   * @description       返回区域的文字，如果为 null 的话，backArrow 也不会渲染
   * @default           ''
   */
   back?: string | null;
  /**
   * @description       点击返回区域后的回调
   * @default           -
   */
   onBack?: () => void;
  /**
   * @description       是否显示返回区域的箭头，也可以传入 ReactNode 进行自定义
   * @default           true
   */
  backArrow?: boolean | ReactNode;
  /**
   * @description       左侧内容
   * @default           -
   */
  left?: ReactNode;
  /**
   * @description       标题内容
   * @default           -
   */
  children?: ReactNode;
  /**
   * @description       右侧内容
   * @default           -
   */
  right?: ReactNode;
  /**
    * @description       背景是否透明
    * @default           false
    */
  isTransparent?: boolean;
} & NativeProps<'--height' | '--border-bottom'>

const prefixCls = 'btl-nav-bar';

const defualtProps = {
  back: '',
  backArrow: true,
};

const NavBar: FC<PropsWithChildren<NavProps>> = props => {
  const p = { ...defualtProps, ...props };

  const transparentStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    borderBottom: 'none',
  };

  console.log(p);
  return withNativeProps(
    p,
    <div
      className={prefixCls}
      style={p.isTransparent ? transparentStyle : {}}
    >
      <div className={`${prefixCls}-left`}>
        {p.back !== null && (
          <div className={`${prefixCls}-back`} onClick={p.onBack}>
            {p.backArrow && (
              <span className={`${prefixCls}-back-arrow`}>
                {
                  p.backArrow === true
                    ? (
                      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2246" width="24" height="24">
                        <path fill={p.isTransparent ? '#fff' : '#182444'} d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" p-id="2247"></path>
                      </svg>
                    )
                    : p.backArrow
                }
              </span>
            )}
            <span aria-hidden='true'>{p.back}</span>
          </div>
        )}
        {p.left}
      </div>
      <div className={`${prefixCls}-title`}>{p.children}</div>
      <div className={`${prefixCls}-right`}>{p.right}</div>
    </div>
  );
}

export default NavBar;
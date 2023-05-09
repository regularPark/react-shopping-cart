import { CSSProp, styled } from 'styled-components';

export interface Props {
  width: string;
  height: string;
  color: string;
  path: string;
  viewBox: string;
  svgStyle: CSSProp;
}

const Icon = ({ width, height, color, path, viewBox, svgStyle }: Props) => {
  return (
    <S.Svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      styled={svgStyle}
    >
      <path d={path} fill={color} />
    </S.Svg>
  );
};

const S = {
  Svg: styled.svg<{ styled: CSSProp }>`
    ${(props) => props.styled}
  `,
};

export default Icon;

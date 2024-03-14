interface FontProps {
  Fmax: number
  Fmin: number
  lineHeight?: number
  weight?: number
}

export const font = ({ Fmax, Fmin, lineHeight, weight }: FontProps) => `
font-weight: ${weight || '400'};
line-height: ${{ lineHeight } || 1.2};
font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

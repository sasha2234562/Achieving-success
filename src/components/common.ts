interface FontProps {
    Fmax: number
    Fmin: number
    lineHeight?: number
    weight?: number
    textAlign?: string
}

export const font = ({Fmax, Fmin, lineHeight, weight, textAlign}: FontProps) => `
font-weight: ${weight || '400'};
line-height: ${{lineHeight} || 1.2};
font-size: clamp(${Fmin}px, 5vw, ${Fmax}px);
text-align: ${textAlign || 'left'};
`

import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonTypeStyleProps, Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}

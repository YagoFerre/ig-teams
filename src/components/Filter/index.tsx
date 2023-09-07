import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import { Container, FilterStyleProps, Title } from './styles'

interface Props extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}

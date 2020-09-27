import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { LandingPageProps } from 'types/api'

const SectionAboutProject = ({aboutProject}: LandingPageProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={require('@images/project.png')}
            loading="lazy"
            // alt={sectionAboutProject.image.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{aboutProject.title}</Heading>
          <S.Text>
            {aboutProject.description}
          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject

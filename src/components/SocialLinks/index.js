import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './styled'

const SocialLinks = () => (
    <S.SocialLinksWrapper>
        <S.SocialLinksList>
            {links.map((links, i) =>{
                const Icon = Icons[links.label]

                return (
                    <S.SocialLinksItem key={i}>
                        <S.SocialLinksLink href={links.url} title={links.label} target="_blank" rel="noopener noreferrer">
                            <S.IconWrapper>
                                <Icon />
                            </S.IconWrapper>
                        </S.SocialLinksLink>
                    </S.SocialLinksItem>
                )
            })}
        </S.SocialLinksList>
    </S.SocialLinksWrapper>
)

export default SocialLinks
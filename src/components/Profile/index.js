import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description },
        },
    } = useStaticQuery(graphql`
            query MySiteMetadata {
            site {
                siteMetadata {
                    author
                    title
                    description
                    position
                }
            }
        }
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile

// compenente react

//import { StaticQuery, graphql } from 'gatsby'

// const Profile = () => (
//     <StaticQuery
//         query={graphql`
//             query MySiteMetadata {
//                 site {
//                     siteMetadata {
//                         author
//                         title
//                         description
//                         position
//                     }
//                 }
//             }
//         `}
//         render={{ site: {siteMetadata: { title, position, description }}} => (
//             <div className="profile-wrapper">
//                 <h1>{data.site.siteMetadata.author}</h1>
//                 <h2>{data.site.siteMetadata.position}</h2>
//                 <p>{data.site.siteMetadata.description}</p>
//             </div>
//         )}
//     />
// )
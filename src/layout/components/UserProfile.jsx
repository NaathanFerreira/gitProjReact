import React from 'react'
import './userProfile.css'

import { connect } from 'react-redux'

import { FaUserAlt, FaLocationArrow, FaListAlt, FaLink, FaGithub, FaArrowCircleRight } from 'react-icons/fa'

import UserInfos from './widget/UserInfos'
import If from './conditional/If'
import Spinner from './widget/Spinner'

function UserProfile(props) {

    const { loading, name, bio, photoUrl, location, blog, gitLink, reposCount, reposList, searched } = props

    function renderRepos(reposList) {
        if (reposList.length > 0) {
            return reposList.map(r => {
                return (
                    <dl key={r.id}>
                        <div className="row">
                            <dt className="col-1"><FaArrowCircleRight /></dt>
                            <dd className="col-6"><a href={r.html_url} target="_blank">{r.name}</a></dd>
                        </div>
                    </dl>
                )
            })
        }
    }


    return (
        <If test={searched}>
            {loading ? (
                <div className="userProfile spinner">
                    <Spinner />
                </div>
            ) : (
                <div className="userProfile">
                    <div className="userInfos">
                        <img src={photoUrl} alt="userPhoto" />
                        <UserInfos title text={name ? name : "<No name>"}>
                            <FaUserAlt />
                        </UserInfos>
                        <UserInfos text={bio ? bio : "<No bio>"}>
                            <FaListAlt />
                        </UserInfos>
                        <UserInfos text={location ? location : "<No location>"}>
                            <FaLocationArrow />
                        </UserInfos>
                        <UserInfos link={blog} text={blog ? "Blog" : "<No blog>"}>
                            <FaLink />
                        </UserInfos>
                        <UserInfos link={gitLink} text="Visit on GitHub">
                            <FaGithub />
                        </UserInfos>
                    </div>
                    <div className="userRepos">
                        <h5>Public repositories: {reposCount}</h5>
                        {renderRepos(reposList)}
                    </div>
                </div>
            )}
        </If>
    )
}

function matStateToProps(state) {
    return {
        loading: state.user.loading,
        searched: state.user.searched,
        photoUrl: state.user.photoUrl,
        name: state.user.name,
        bio: state.user.bio,
        location: state.user.location,
        blog: state.user.blog,
        gitLink: state.user.gitLink,
        reposCount: state.user.reposCount,
        reposList: state.user.reposList
    }
}

export default connect(matStateToProps)(UserProfile)
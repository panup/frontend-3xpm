import React from 'react'

export const IconSteam = 'fab fa-steam-square'
export const IconHome = 'fa fa-home'
export const IconBookOpen = 'fas fa-book-open'
export const IconUsers = 'fa fa-users'
export const IconStar = 'fas fa-star'
export const IconAngleRight = 'fas fa-angle-right'
export const IconCogs = 'fa fa-cogs'
export const IconTwitch = 'fab fa-twitch'

export class Icon extends React.Component {
  render () {
    const { icon, className } = this.props
    if (!icon) {
      return <i></i>
    }

    var classes = icon
    if (className) {
      classes += ' ' + className
    }

    return (
      <i className={classes} />
    )
  }
}

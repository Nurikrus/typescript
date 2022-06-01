import { renderBlock } from './lib.js'

export class User {
  public userName: string
  public userImage: string
  public userFavorites: string

  constructor(userName: string, userImage: string, userFavorites: string) {
    this.userName = userName
    this.userImage = userImage
    this.userFavorites = userFavorites
  }
}

export const users = new User('Wade Warren', '/img/avatar.png', null)

/**
 * renderUserBlock
 * @param userName
 * @param userImage
 * @param userFavorites
 */
export function renderUserBlock(userName: string, userImage: string, userFavorites: string) {
  const favoritesCaption = (Number(userFavorites) >= 1) ? userFavorites : 'ничего нет'
  const hasFavoriteItems = (Number(userFavorites) >= 1) ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userImage}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

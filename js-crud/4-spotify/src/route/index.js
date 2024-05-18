// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
class Track {
  static #trackList = []
  constructor(img, name, singer) {
    let num = Math.trunc(Math.random() * 10000)
    if (num.length !== 4) {
      num = Math.trunc(Math.random() * 10000)
      this.trackId = num
    } else {
      this.trackId = num
    }
    this.trackImg = img
    this.trackName = name
    this.trackSinger = singer
  }
  static addTrack = (track) =>
    this.#trackList.push(track)

  static getTrackList = () => this.#trackList
}
class Playlist {
  static #playlistList = []
  static #count = 0
  constructor(img, name, amount = 0, tracks = {}) {
    this.playlistId = ++Playlist.#count
    this.playlistImg = img
    this.playlistName = name
    this.playlistAmount = amount
    this.playlistTracks = tracks
  }
  static addPlaylist = (playlist) =>
    this.#playlistList.push(playlist)

  static getPlaylistList = () => this.#playlistList

  static getPlaylistById = (id) =>
    this.#playlistList.find((element) => element.playlistId === id)

  static updatePlaylist = (id, data) => {
    const playlist = this.getPlaylistById(id)
    
    if (playlist) {
      // if (data) {
        //   playlist.playlistUserSurname = data.userSurname
        //   playlist.playlistUserName = data.userName
        //   playlist.playlistUserPhone = data.userPhone
        //   playlist.playlistUserEmail = data.userEmail
        // }
        
        return true
      } else {
        return false
      }
    }
    static deletePlaylistDublicates = (id) => {
    const playlist = this.getPlaylistById(id)
    for (let i = 0; i < this.#playlistList.length; i++) {
      if (playlist === this.#playlistList[i]) {
        this.#playlistList.splice(id,1)
      }
    }
  }
}
// ================================================================
let bg='/img/fav-album-svg.svg';
let playlist1 = new Playlist(bg, 'Пісні, що сподобались', 50);
Playlist.addPlaylist(playlist1);
bg='/img/mix-album-svg.svg';
playlist1 = new Playlist(bg, 'Спільний альбом', 20);
Playlist.addPlaylist(playlist1);
bg='/img/inyn-svg.svg';
playlist1 = new Playlist(bg,'Інь Ян', 10);
Playlist.addPlaylist(playlist1);
const pl1='/img/pl1-svg.svg';
playlist1 = new Playlist(pl1,'Мій плейліст №1', 36);
Playlist.addPlaylist(playlist1);
// ================================================================
router.get('/', function (req, res) {
  const playlist = Playlist.getPlaylistList();
  console.log(playlist);
  res.render('index', {
    style: 'index',
    caption: 'Моя бібліотека',
    playlist,
  })
})
// ================================================================
router.get('/spotify-search', function (req, res) {
  res.render('spotify-search', {
    style: 'spotify-search',
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

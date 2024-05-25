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
class searchPlaylist {
  static #searchPlaylistList = []
  static #count = 0
  constructor(img, name, type, amount = 0) {
    this.searchPlaylistId = ++searchPlaylist.#count
    this.searchPlaylistImg = img
    this.searchPlaylistName = name
    this.searchPlaylistType = type
    this.searchPlaylistAmount = amount
  }
  static addsearchPlaylist = (searchPlaylist) =>
    this.#searchPlaylistList.push(searchPlaylist)

  static getsearchPlaylistList = () => this.#searchPlaylistList

  static getsearchPlaylistById = (id) =>
    this.#searchPlaylistList.find((element) => element.searchPlaylistId === id)

  static updatesearchPlaylist = (id, data) => {
    const searchPlaylist = this.getsearchPlaylistById(id)
    
    if (searchPlaylist) {        
        return true
      } else {
        return false
      }
    }
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
        return true
      } else {
        return false
      }
    }
}
// ================================================================
let bg='/img/fav-album.svg';
let playlist1 = new Playlist(bg, 'Пісні, що сподобались', 50);
Playlist.addPlaylist(playlist1);
bg='/img/mix-album.svg';
playlist1 = new Playlist(bg, 'Спільний альбом', 20);
Playlist.addPlaylist(playlist1);
bg='/img/inyn.svg';
playlist1 = new Playlist(bg,'Інь Ян', 10);
Playlist.addPlaylist(playlist1);
const pl1='/img/pl1.svg';
playlist1 = new Playlist(pl1,'Мій плейліст №1', 36);
Playlist.addPlaylist(playlist1);
bg='/img/pl2.svg';
playlist1 = new Playlist(bg,'Мій плейліст №2', 12);
Playlist.addPlaylist(playlist1);

let searchplaylist1 = new searchPlaylist(bg,'Мій плейліст №2', 'Плейліст', 12);
searchPlaylist.addsearchPlaylist(searchplaylist1);
searchplaylist1 = new searchPlaylist(pl1,'Мій плейліст №1', 'Плейліст', 36);
searchPlaylist.addsearchPlaylist(searchplaylist1);
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
router.get('/spotify-addpaylist', function (req, res) {
  res.render('spotify-addpaylist', {
    style: 'spotify-addpaylist',
    caption: 'Створити',
  })
})
// ================================================================
router.get('/spotify-search', function (req, res) {
  // const searchPlaylist = searchPlaylist.getsearchPlaylistList();
  res.render('spotify-search', {
    style: 'spotify-search',
    // searchPlaylist,
  })
})
// ================================================================
router.post('/spotify-search', function (req, res) {
  // const searchPlaylist = searchPlaylist.getsearchPlaylistList();
  console.log(req.body);
  res.render('spotify-search', {
    style: 'spotify-search',
    // searchPlaylist,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

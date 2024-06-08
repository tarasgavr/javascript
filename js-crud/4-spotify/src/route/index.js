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
  
  bg='/img/dakiti.svg';
  let track1 = new Track(bg, 'Пісні, що сподобались', 50);
  Track.addTrack(track1);
  bg='/img/enlio.svg';
  track1 = new Track(bg, 'Спільний альбом', 20);
  Track.addTrack(track1);
  bg='/img/inyn.svg';
  track1 = new Track(bg,'Інь Ян', 10);
  Track.addTrack(track1);
  bg='/img/maluna.svg';
  track1 = new Track(bg,'Мій плейліст №2', 12);
  Track.addTrack(track1);
  bg='/img/romance.svg';
  track1 = new Track(bg,'Мій плейліст №2', 12);
  Track.addTrack(track1);
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
router.get('/spotify-addplaylist', function (req, res) {
  res.render('spotify-addplaylist', {
    style: 'spotify-addplaylist',
    caption: 'Створити',
    caption2: 'Плейліст',
    caption3: 'Мікс',
    title2: 'Створіть плейліст із піснями чи епізодами',
    title3: 'Комбінуйте смаки в спільному плейлісті з друзями',
  })
})
// ================================================================
router.get('/spotify-search', function (req, res) {
  res.render('spotify-search', {
    style: 'spotify-search',
  })
})
// ================================================================
router.post('/spotify-search', function (req, res) {
  let searchItem = [];
  let list = Playlist.getPlaylistList().reverse
  ();
  for (let i = 0; i < list.length; i++) {
    list[i].playlistName = list[i].playlistName.toLowerCase();
    if (list[i].playlistName.includes(req.body.search)) {
      searchItem.push(list[i]);
    }
  }
  console.log(searchItem);
  res.render('spotify-search', {
    style: 'spotify-search',
    searchItem,
    search: req.body.search,
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

export const levels = {
  'level-1': {
    title: `Кто исполняет эту песню?`,
    audio: {
      artist: `Kevin MacLeod`,
      name: `Long Stroll`,
      image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      genre: `Jazz`
    },
    answers: [
      {
        id: `answer-1`,
        src: ``,
        name: `Jingle Punks`,
        correct: false
      },
      {
        id: `answer-2`,
        src: ``,
        name: `Kevin MacLeod`,
        correct: true
      },
      {
        id: `answer-3`,
        src: ``,
        name: `Audionautix`,
        correct: false
      }
    ],
    next: {
      name: `level-2`,
      type: `artist`
    }
  },
  'level-2': {
    title: `Кто исполняет эту песню?`,
    audio: {
      artist: `Jingle Punks`,
      name: `In the Land of Rhinoplasty`,
      image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      genre: `Rock`
    },
    answers: [
      {
        id: `answer-1`,
        value: `val-1`,
        src: ``,
        name: `Jingle Punks`,
        correct: true
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        name: `Riot`,
        correct: false
      },
      {
        id: `answer-3`,
        value: `val-3`,
        src: ``,
        name: `Kevin MacLeod`,
        correct: false
      }
    ],
    next: {
      name: `level-3`,
      type: `artist`
    }
  },
  'level-3': {
    title: `Кто исполняет эту песню?`,
    audio: {
      artist: `Audionautix`,
      name: `Travel Light`,
      image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      genre: `Country`
    },
    answers: [
      {
        id: `answer-1`,
        value: `val-1`,
        src: ``,
        name: `Соловей разбойник`,
        correct: false
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        name: `Audionautix`,
        correct: true
      },
      {
        id: `answer-3`,
        value: `val-3`,
        src: ``,
        name: `Jingle Punks`,
        correct: false
      }
    ],
    next: {
      name: `level-4`,
      type: `artist`
    }
  },
  'level-4': {
    title: `Кто исполняет эту песню?`,
    audio: {
      artist: `Riot`,
      name: `	Level Plane`,
      image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      genre: `R&B`
    },
    answers: [
      {
        id: `answer-1`,
        value: `val-1`,
        src: ``,
        name: `Чебурашка`,
        correct: false
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        name: `Бах`,
        correct: false
      },
      {
        id: `answer-3`,
        value: `val-3`,
        src: ``,
        name: `Riot`,
        correct: true
      }
    ],
    next: {
      name: `level-5`,
      type: `artist`
    }
  },
  'level-5': {
    title: `Кто исполняет эту песню?`,
    audio: {
      artist: `Jingle Punks`,
      name: `Lucky Day`,
      image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      genre: `Pop`
    },
    answers: [
      {
        id: `Burito`,
        value: `val-1`,
        src: ``,
        name: `Снегурочка`,
        correct: false
      },
      {
        id: `answer-2`,
        value: `val-2`,
        src: ``,
        name: `Jingle Punks`,
        correct: true
      },
      {
        id: `answer-3`,
        value: `val-3`,
        src: ``,
        name: `Riot`,
        correct: false
      }
    ],
    next: {
      name: `level-6`,
      type: `artist`
    }
  },
  'level-11': {
    title: `Выберите поп треки`,
    audios: [
      {
        id: `answer-1`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      },
      {
        id: `answer-2`,
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true
      },
      {
        id: `answer-3`,
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false
      },
      {
        id: `answer-4`,
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false
      }
    ],
    next: {
      name: `level-7`,
      type: `genre`
    }
  },
  'level-7': {
    title: `Выберите инди-рок треки`,
    audios: [
      {
        id: `answer-1`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      },
      {
        id: `answer-2`,
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false
      },
      {
        id: `answer-3`,
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false
      },
      {
        id: `answer-4`,
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true
      }
    ],
    next: {
      name: `level-8`,
      type: `genre`
    }
  },
  'level-8': {
    title: `Выберите кантри треки`,
    audios: [
      {
        id: `answer-1`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      },
      {
        id: `answer-2`,
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false
      },
      {
        id: `answer-3`,
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: true
      },
      {
        id: `answer-4`,
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false
      }
    ],
    next: {
      name: `level-9`,
      type: `genre`
    }
  },
  'level-9': {
    title: `Выберите инди-рок треки`,
    audios: [
      {
        id: `answer-1`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      },
      {
        id: `answer-2`,
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false
      },
      {
        id: `answer-3`,
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false
      },
      {
        id: `answer-4`,
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true
      }
    ],
    next: {
      name: `level-10`,
      type: `genre`
    }
  },
  'level-10': {
    title: `Выберите электронику`,
    audios: [
      {
        id: `answer-1`,
        artist: `Gunnar Olsen`,
        name: `Home Stretch`,
        image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true
      },
      {
        id: `answer-2`,
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false
      },
      {
        id: `answer-3`,
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false
      },
      {
        id: `answer-4`,
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false
      }
    ],
    next: null
  }
};


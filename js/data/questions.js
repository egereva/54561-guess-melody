const questions = [
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    answers:
    [
      {
        artist: `Пелагея`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Краснознаменная дивизия имени моей бабушки`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      },
      {
        artist: `Lorde`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      }
    ],
    correct: 3,
    type: `artist`
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    answers:
      [
        {
          artist: `Jingle Punks`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`
        },
        {
          artist: `Kevin MacLeod`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
        },
        {
          artist: `Audionautix`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
        }
      ],
    correct: 2,
    type: `artist`
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers:
      [
        {
          artist: `Jingle Punks`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`
        },
        {
          artist: `Riot`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
        },
        {
          artist: `Kevin MacLeod`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
        }
      ],
    correct: 1,
    type: `artist`
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    answers:
      [
        {
          artist: `Соловей разбойник`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`
        },
        {
          artist: `Audionautix`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
        },
        {
          artist: `Jingle Punks`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
        }
      ],
    correct: 2,
    type: `artist`
  },
  {
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    answers:
      [
        {
          artist: `Чебурашка`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`
        },
        {
          artist: `Бах`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
        },
        {
          artist: `Riot`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
        }
      ],
    correct: 3,
    type: `artist`
  },
  {
    title: `Выберите инди-рок треки`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Rock`
      }
    ],
    correct: [4],
    type: `genre`
  },
  {
    title: `Выберите кантри треки`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      }
    ],
    correct: [3],
    type: `genre`
  },
  {
    title: `Выберите электронику`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      }
    ],
    correct: [1],
    type: `genre`
  },
  {
    title: `Выберите поп треки`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      }
    ],
    correct: [2],
    type: `genre`
  },
  {
    title: `Выберите инди-рок треки`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Rock`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Rock`
      }
    ],
    correct: [4],
    type: `genre`
  }
];


export default questions;

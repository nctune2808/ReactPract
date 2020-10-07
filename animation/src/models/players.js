const qualities = [
  {
    legendary: require('../images/quality/legendary/MOON.png'),
    master: require('../images/quality/master/WK.png'),
  },
];

const nationalities = [
  {
    arg: require('../images/nation/ARGENTINA.png'),
    fra: require('../images/nation/FRANCE.png'),
    ger: require('../images/nation/GERMANY.png'),
  },
];

const Players = [
  {
    name: 'messi',
    avatar: '../images/player/messi/avatar.png',
    nation: nationalities[0].fra,
    quality: qualities[0].legendary,
    club: '',
  },
];

export default Players;

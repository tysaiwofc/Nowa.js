client.once('ready', function () {
  let magiaAvatar = [
    `https://cdn.nekos.life/avatar/avatar_49.png`, //LINK 1
    `https://cdn.nekos.life/avatar/avatar_67.png`, //LINK 2
    `https://cdn.nekos.life/avatar/avatar_52.png`, //LINK 3
    `https://cdn.nekos.life/avatar/avatar_06.png`,
    `https://cdn.nekos.life/avatar/avatar_05.png`,
    `https://cdn.nekos.life/avatar/avatar_42.png`,
    `https://cdn.nekos.life/avatar/avatar_65.png`,
    `https://cdn.nekos.life/avatar/avatar_67.png`,
    `https://cdn.nekos.life/avatar/avatar_66.png`,
    'https://cdn.nekos.life/avatar/avatar_59.png',
    'https://cdn.nekos.life/avatar/avatar_49.png',
    'https://cdn.nekos.life/avatar/avatar_43.png',
    'https://cdn.nekos.life/avatar/avatar_23.png',


],
i = 0;
setInterval(
() =>
    client.user.setAvatar(`${magiaAvatar[i++ % magiaAvatar.length]}`),
    7200000 * 60
);

})

/*------------------------------------------------------------------------*/
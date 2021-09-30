client.once('ready', function () {
  let magiaAvatar = [
    `https://cdn.nekos.life/avatar/avatar_49.png`, //LINK 1
    `https://cdn.nekos.life/avatar/avatar_67.png`, //LINK 2
    `https://cdn.nekos.life/avatar/avatar_52.png`, //LINK 3
    `https://cdn.nekos.life/avatar/avatar_06.png`, /* apenas v13 */
    `https://cdn.nekos.life/avatar/avatar_05.png`, /* apenas v13 */
    `https://cdn.nekos.life/avatar/avatar_42.png`, /* apenas v13 */
    `https://cdn.nekos.life/avatar/avatar_65.png`, /* apenas v13 */
    `https://cdn.nekos.life/avatar/avatar_67.png`, /* apenas v13 */
    `https://cdn.nekos.life/avatar/avatar_66.png`, /* apenas v13 */
    'https://cdn.nekos.life/avatar/avatar_59.png', /* apenas v13 */
    'https://cdn.nekos.life/avatar/avatar_49.png', /* apenas v13 */
    'https://cdn.nekos.life/avatar/avatar_43.png', /* apenas v13 */
    'https://cdn.nekos.life/avatar/avatar_23.png', /* apenas v13 */


],
i = 0;
setInterval(
() =>
    client.user.setAvatar(`${magiaAvatar[i++ % magiaAvatar.length]}`),
    7200000 * 60
);

}) /* apenas v13 */

/*------------------------------------------------------------------------*/

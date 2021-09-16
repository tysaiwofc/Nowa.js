const { Bot, Message } = require('discord.js');
const SnakeGame = require('snakecord')
module.exports = {
    name: 'snakegame',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(bot, message, args) => {
        const snakeGame = new SnakeGame({
            title: 'Jogo da cobrinha',
            color: "YELLOW",
            timestamp: true,
            gameOverTitle: "Fim de jogo"
        });
        return snakeGame.newGame(message);
    }
}
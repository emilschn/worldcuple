import players from '../fixtures/players'

function GetCurrentPlayer() {
    const originalDate = new Date(2022, 5, 10);
    const currentDate = new Date();
    const n = 86400000;
    let daysDiff = Math.round((currentDate.getTime() - originalDate.getTime()) / n) - 1;
    if (daysDiff < 0) {
        daysDiff = 0;
    }
    if (daysDiff > players.length - 1) {
        daysDiff = players.length - 1
    }
    return players[daysDiff];
}
export default GetCurrentPlayer;
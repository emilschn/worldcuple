import players from '../fixtures/players'

function GetCurrentPlayer() {
    const originalDate = new Date(2022, 5, 10);
    const currentDate = new Date();
    const n = 86400000;
    const daysDiff = Math.round((currentDate.getTime() - originalDate.getTime()) / n);
    return players[daysDiff];
}
export default GetCurrentPlayer;
import React, { useState, useEffect } from 'react';
import Card from './Card';
import wordsList from '../words';
import './GameBoard.css';

const GameBoard = () => {
    const [currentWord, setCurrentWord] = useState({});
    const [forbiddenWords, setForbiddenWords] = useState([]);
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
    const [turnCount, setTurnCount] = useState(0);
    const [totalTurns, setTotalTurns] = useState(10); // Varsayılan olarak 10 tur
    const [remainingPasses, setRemainingPasses] = useState(3);
    const [tabooUsed, setTabooUsed] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(5); // 5 saniye
    const [selectedTimer, setSelectedTimer] = useState(5);
    const [maxTimerOptions] = useState([5, 30, 45, 60, 90, 120]); // Tur süresi seçenekleri (5 saniye eklendi)
    const [maxTurnOptions] = useState([2, 5, 10, 15, 20]); // Toplam tur seçenekleri
    const [team1Name, setTeam1Name] = useState('1. Takım');
    const [team2Name, setTeam2Name] = useState('2. Takım');
    const [totalCards, setTotalCards] = useState(wordsList.length);
    const [usedCards, setUsedCards] = useState([]);
    const [currentTeam, setCurrentTeam] = useState(1); // Başlangıçta 1. takım başlasın
    const [endTurnStatsVisible, setEndTurnStatsVisible] = useState(false);
    const [endGameVisible, setEndGameVisible] = useState(false);
    const [currentTeamTurnScore, setCurrentTeamTurnScore] = useState(0); // Güncel turda toplanan skor

    useEffect(() => {
        const usedCardsCount = totalCards - wordsList.length;
        // setUsedCardsCount(usedCards); // Kullanılan kart sayısını güncelle
    }, [turnCount]);

    useEffect(() => {
        if (gameStarted && timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1); // Timer'ı güncelle
            }, 1000);
            return () => clearInterval(interval);
        } else if (gameStarted && timer === 0) {
            handleEndTurn();
        }
    }, [gameStarted, timer]);

    const startGame = () => {
        setGameStarted(true);
        setTurnCount(1);
        setEndTurnStatsVisible(false); // Yeni oyun başladığında tur sonu istatistikleri gizlensin
        setTotalTurns(maxTurnOptions[0]); // Varsayılan olarak ilk tur sayısını setle

        // İlk kelimeyi rastgele seç
        selectRandomWord();
    };

    const selectRandomWord = () => {
        let newIndex = Math.floor(Math.random() * wordsList.length);
        while (usedCards.includes(wordsList[newIndex])) {
            newIndex = Math.floor(Math.random() * wordsList.length);
        }
        const newWord = wordsList[newIndex];
        setCurrentWord(newWord);
        setForbiddenWords(newWord.forbidden);
        setTabooUsed(false);
        setUsedCards([...usedCards, newWord]);
    };

    const nextWord = () => {
        selectRandomWord();
    };

    const handlePass = () => {
        if (remainingPasses > 0) {
            setRemainingPasses(remainingPasses - 1);
            nextWord();
        }
    };

    const handleTaboo = () => {
        if (!tabooUsed) {
            setTabooUsed(true);
            if (currentTeam === 1) {
                setTeamAScore(teamAScore - 1);
            } else {
                setTeamBScore(teamBScore - 1);
            }
            setCurrentTeamTurnScore(currentTeamTurnScore - 1);
            nextWord();
        }
    };

    const handleCorrect = () => {
        if (currentTeam === 1) {
            setTeamAScore(teamAScore + 1);
        } else {
            setTeamBScore(teamBScore + 1);
        }
        setCurrentTeamTurnScore(currentTeamTurnScore + 1); // Doğru cevap alındığında tur skorunu arttır
        nextWord();
    };

    const handleEndTurn = () => {
        setEndTurnStatsVisible(true);
        // Check if it's the last turn for both teams or if all cards are used
        if ((turnCount === totalTurns && currentTeam === 2) || usedCards.length === totalCards) {
            endGame();
        }
    };

    const handleStartNewTurn = () => {
        setEndTurnStatsVisible(false);
        if (currentTeam === 1) {
            setCurrentTeam(2);
        } else {
            setCurrentTeam(1);
            setTurnCount(turnCount + 1);
        }
        setRemainingPasses(3);
        setTabooUsed(false);
        setTimer(selectedTimer); // Timer'ı sıfırla ve yeni tur için başlat
        setCurrentTeamTurnScore(0);
        selectRandomWord(); // Yeni kelime seçimi yap
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? '0' + sec : sec}`;
    };

    const endGame = () => {
        setGameStarted(false);
        setEndGameVisible(true);
    };

    const handleEndGame = () => {
        let winner;
        let winnerScore;
        if (teamAScore > teamBScore) {
            winner = team1Name;
            winnerScore = teamAScore;
        } else if (teamBScore > teamAScore) {
            winner = team2Name;
            winnerScore = teamBScore;
        } else {
            winner = 'Berabere';
            winnerScore = teamAScore; // veya teamBScore, her ikisi de aynı
        }
        alert(`Oyun bitti! Kazanan takım: ${winner}. ${team1Name}: ${teamAScore} puan, ${team2Name}: ${teamBScore} puan.`);

        // Reset all game state variables
        setCurrentWord({});
        setForbiddenWords([]);
        setTeamAScore(0);
        setTeamBScore(0);
        setTurnCount(0);
        setRemainingPasses(3);
        setTabooUsed(false);
        setTimer(5); // Reset timer to default
        setEndGameVisible(false);
        setUsedCards([]);
        setCurrentTeam(1);
        setCurrentTeamTurnScore(0)
        setTeam1Name('1. Takım');
        setTeam2Name('2. Takım');
        setTotalTurns(10); // Reset total turns to default
        setTotalCards(wordsList.length);
    };


    return (
        <div className="game-board">
            <h1>Taboo Oyunu</h1>
            {!gameStarted && !endGameVisible && (
                <div className="setup-container">
                    <h2>Oyun Ayarları</h2>
                    <div className="setup-item">
                        <label>Tur Süresi:</label>
                        <select onChange={(e) => {
                            const time = parseInt(e.target.value);
                            setTimer(time);
                            setSelectedTimer(time);
                        }}>
                            {maxTimerOptions.map((time) => (
                                <option key={time} value={time}>{time} saniye</option>
                            ))}
                        </select>
                    </div>
                    <div className="setup-item">
                        <label>Toplam Tur Sayısı:</label>
                        <select onChange={(e) => setTotalTurns(parseInt(e.target.value))}>
                            {maxTurnOptions.map((turn) => (
                                <option key={turn} value={turn}>{turn} tur</option>
                            ))}
                        </select>
                    </div>
                    <div className="setup-item">
                        <label>1. Takım İsmi:</label>
                        <input type="text" value={team1Name} onChange={(e) => setTeam1Name(e.target.value)} />
                    </div>
                    <div className="setup-item">
                        <label>2. Takım İsmi:</label>
                        <input type="text" value={team2Name} onChange={(e) => setTeam2Name(e.target.value)} />
                    </div>
                    <button onClick={startGame}>Oyuna Başla</button>
                </div>
            )}
            {gameStarted && !endTurnStatsVisible && !endGameVisible && (
                <div>
                    <div className="current-team" style={{color: currentTeam === 1 ? 'red' : 'blue'}}>
                        {currentTeam === 1 ? `${team1Name} Sırası` : `${team2Name} Sırası`}
                    </div>
                    <div className="timer" style={{color: timer > 30 ? 'green' : timer > 10 ? 'orange' : 'red'}}>
                        Kalan Zaman: {formatTime(timer)}
                    </div>
                    <div className="card-container">
                        <Card word={currentWord.word} forbidden={forbiddenWords} />
                    </div>
                    <div className="actions">
                        <button className={`pass-button ${remainingPasses === 0 ? 'disabled' : ''}`} onClick={handlePass} disabled={remainingPasses === 0}>
                            Pas Geç ({remainingPasses} kaldı)
                        </button>
                        <button className={`taboo-button ${tabooUsed ? 'disabled' : ''}`} onClick={handleTaboo} disabled={tabooUsed}>
                            Tabu
                        </button>
                        <button className="correct-button" onClick={handleCorrect}>
                            Doğru
                        </button>
                    </div>
                    <div className="scores">
                        <div className="team-score" style={{ color: 'red' }}>{team1Name} Skoru: {teamAScore}</div>
                        <div className="team-score" style={{ color: 'blue' }}>{team2Name} Skoru: {teamBScore}</div>
                    </div>
                    <div className="turn-info">
                        <div>Tur: {turnCount} / {totalTurns}</div>
                        <div>Kullanılan Kart Sayısı: {usedCards.length} / {totalCards}</div>
                    </div>
                </div>
            )}
            {endTurnStatsVisible && gameStarted && !endGameVisible && (
                <div className="end-turn-stats">
                    <h2>Tur Sonu İstatistikleri</h2>
                    <div className="turn-stats">
                        {currentTeam === 1 && (
                            <div className="turn-stats">
                                <p style={{ color: 'green' }}>{team1Name} takımın turu tamamlandı. Tur puanı: ({currentTeamTurnScore})</p>
                            </div>
                        )}
                        {currentTeam === 2 && (
                            <div className="turn-stats">
                                <p style={{ color: 'green' }}>{team2Name} takımın turu tamamlandı. Tur puanı: ({currentTeamTurnScore})</p>
                            </div>
                        )}
                        <p style={{ color: 'red' }}>{team1Name} takımının toplam puan: {teamAScore} </p>
                        <p style={{ color: 'blue' }}>{team2Name} takımının toplam puan: {teamBScore} </p>
                    </div>
                    <button onClick={handleStartNewTurn}>{currentTeam === 1 ? `${team2Name} Sırası` : `${team1Name} Sırası`} için Yeni Tur Başlat</button>
                </div>
            )}
            {endGameVisible && (
                <div className="end-game">
                    <h2>Oyun Bitti!</h2>
                    <p style={{ color: 'green' }}>Kazanan Takım: {teamAScore > teamBScore ? team1Name : teamBScore > teamAScore ? team2Name : 'Berabere'}</p>
                    <p style={{ color: 'red' }}>{team1Name} Skoru: {teamAScore}</p>
                    <p style={{ color: 'blue' }}>{team2Name} Skoru: {teamBScore}</p>
                    <button onClick={handleEndGame}>Oyunu Bitir</button>
                </div>
            )}
        </div>
    );
};

export default GameBoard;

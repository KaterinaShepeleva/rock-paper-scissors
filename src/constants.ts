export const STORAGE_KEY = 'rps-storage';

export interface Score {
  player: number;
  computer: number;
  overall: number;
}

export const initialGameState: Score = {
  player: 0,
  computer: 0,
  overall: 0,
};

export enum Values {
  Rock,
  Paper,
  Scissors,
}

export interface GameValue {
  value: Values;
  name: string;
}

export const GameValues: GameValue[] = [
  {
    value: Values.Rock,
    name: 'Rock',
  },
  {
    value: Values.Paper,
    name: 'Paper',
  },
  {
    value: Values.Scissors,
    name: 'Scissors',
  },
];

export enum Outcomes {
  Initial,
  Tie,
  PlayerWon,
  ComputerWon,
}

export interface OutcomeValue {
  value: Outcomes;
  name: string;
  cssClass: string;
}

export const OutcomeValues: OutcomeValue[] = [
  {
    value: Outcomes.Initial,
    name: '–',
    cssClass: 'text--initial',
  },
  {
    value: Outcomes.Tie,
    name: 'Tie',
    cssClass: 'text--neutral',
  },
  {
    value: Outcomes.PlayerWon,
    name: 'You won!',
    cssClass: 'text--win',
  },
  {
    value: Outcomes.ComputerWon,
    name: 'Computer won',
    cssClass: 'text--lose',
  },
];

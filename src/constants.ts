export enum StorageKeys {
  Player = 'rps-player',
  Computer = 'rps-computer',
  Overall = 'rps-overall',
}

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
}

export const OutcomeValues: OutcomeValue[] = [
  {
    value: Outcomes.Initial,
    name: '–',
  },
  {
    value: Outcomes.Tie,
    name: 'Tie',
  },
  {
    value: Outcomes.PlayerWon,
    name: 'You won!',
  },
  {
    value: Outcomes.ComputerWon,
    name: 'Computer won :(',
  },
];

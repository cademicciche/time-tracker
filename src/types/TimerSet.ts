export interface TimerSet {
  id: string;
  name: string;
  timers: Timer[];
}

export interface Timer {
  id: string;
  name?: string;
  chargeCode: string;
  currentTime: string;
  isRunning: boolean;
}

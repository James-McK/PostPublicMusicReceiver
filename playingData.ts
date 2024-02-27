export interface PlayingData {
    artist: string;
    title: string;
    album: string;
    durationMs: number;
    positionMs: string;
    playState: PlayState;

    albumArt?: string; // base64 encoded

    timestamp: number;
}

export enum PlayState {
    Playing,
    Paused,
    Other,
    Offline
}
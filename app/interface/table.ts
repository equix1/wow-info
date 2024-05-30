 export default interface TableProps {
    rows: {
        key: string,

        // For Highest Ranking
        playerName ?: string, 
        spec ?: string,
        rating ?: number,

        // For Best Key
        dungeon ?: string,
        players ?: string, 
        timer ?: string,
    }[],
    columns: {
        key: string,
        label: string,
    }[],
}

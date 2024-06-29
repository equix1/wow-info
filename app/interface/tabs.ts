export interface TabsProps {
    tabInfo: {
        id: number,
        slug: string,
        name: string
        bosses: {
            id: number,
            name: string,
            rank: number
        }[],
    }[]
    isVertical?: boolean;
    children?: React.ReactNode;
}

export interface RaidTabsProps {
    raids: {
        id: number,
        slug: string,
        name: string
        bosses: {
            id: number,
            name: string,
            rank: number
        }[],
    }[]
}

export interface BossTabsProps {
    raid: {
        id: number,
        slug: string,
        name: string
        bosses: {
            id: number,
            name: string,
            rank: number
        }[],
    }
}
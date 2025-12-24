const TableSVG = ({ color, options }) => {
    const isRound = options?.shape?.name === "Round";

    return (
        <svg width="260" height="180" viewBox="0 0 260 180">
            {isRound ? (
                <circle cx="130" cy="90" r="50" fill={color.hex} />
            ) : (
                <rect x="50" y="60" width="160" height="60" rx="8" fill={color.hex} />
            )}

            {/* Legs */}
            <rect x="70" y="120" width="10" height="40" fill="#333" />
            <rect x="180" y="120" width="10" height="40" fill="#333" />
        </svg>
    );
};

export default TableSVG;

const ChairSVG = ({ color }) => {
    return (
        <svg width="280" height="200" viewBox="0 0 280 200">
            {/* Shadow */}
            <ellipse cx="140" cy="175" rx="80" ry="10" fill="#000" opacity="0.08" />

            {/* Backrest */}
            <rect x="90" y="30" width="100" height="70" rx="14" fill={color.hex} />

            {/* Seat */}
            <rect x="80" y="90" width="120" height="28" rx="10" fill={color.hex} />

            {/* Legs */}
            <rect x="90" y="118" width="10" height="45" rx="4" fill="#2B2B2B" />
            <rect x="180" y="118" width="10" height="45" rx="4" fill="#2B2B2B" />
        </svg>
    );
};

export default ChairSVG;

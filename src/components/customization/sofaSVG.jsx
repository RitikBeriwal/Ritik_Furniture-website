const SofaSVG = ({ color, options }) => {
    const isL = options?.seating?.name === "L-Shape";

    return (
        <svg width="340" height="200" viewBox="0 0 340 200">
            {/* Shadow */}
            <ellipse cx="170" cy="170" rx="120" ry="12" fill="#000" opacity="0.08" />

            {/* Backrest */}
            <rect x="50" y="50" width={isL ? 200 : 180} height="50" rx="18" fill={color.hex} />

            {/* Seat */}
            <rect x="50" y="90" width={isL ? 200 : 180} height="40" rx="18" fill={color.hex} />

            {/* Arm */}
            <rect x="30" y="60" width="24" height="70" rx="12" fill="#2F2F2F" />

            {/* L Extension */}
            {isL && (
                <rect x="200" y="90" width="60" height="50" rx="18" fill={color.hex} />
            )}
        </svg>
    );
};

export default SofaSVG;

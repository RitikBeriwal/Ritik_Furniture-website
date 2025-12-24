const BedSVG = ({ color, options }) => {
    const storage = options?.storage?.name !== "No Storage";

    return (
        <svg width="340" height="200" viewBox="0 0 340 200">
            {/* Shadow */}
            <ellipse cx="170" cy="170" rx="120" ry="12" fill="#000" opacity="0.08" />

            {/* Headboard */}
            <rect x="60" y="30" width="220" height="36" rx="14" fill="#2B2B2B" />

            {/* Mattress */}
            <rect x="60" y="66" width="220" height="46" rx="14" fill={color.hex} />

            {/* Bed Base */}
            <rect x="60" y="110" width="220" height="30" rx="12" fill="#3A3A3A" />

            {/* Storage drawer */}
            {storage && (
                <rect x="90" y="118" width="160" height="16" rx="8" fill="#1F1F1F" />
            )}
        </svg>
    );
};

export default BedSVG;

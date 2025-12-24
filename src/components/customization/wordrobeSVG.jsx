const WardrobeSVG = ({ color, options }) => {
    const doors = options?.doors?.name || "2 Door";

    return (
        <svg width="220" height="180" viewBox="0 0 220 180">
            <rect x="40" y="20" width="140" height="140" rx="6" fill={color.hex} />

            {/* Door Lines */}
            {doors === "2 Door" && (
                <line x1="110" y1="20" x2="110" y2="160" stroke="#222" />
            )}

            {doors === "3 Door" && (
                <>
                    <line x1="86" y1="20" x2="86" y2="160" stroke="#222" />
                    <line x1="134" y1="20" x2="134" y2="160" stroke="#222" />
                </>
            )}
        </svg>
    );
};

export default WardrobeSVG;

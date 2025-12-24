import { useState, useEffect } from "react";
import { furnitureData } from "../../assests/customizeData";
import FurnitureSelector from "./Options";
import FurniturePreview from "./Preview";
import Summary from "./Summary";
import CustomizationPanel from "./Colors";


export default function CustomizerPage() {
    const [type, setType] = useState("sofa");
    const [options, setOptions] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const data = furnitureData[type];
        let total = data.basePrice;

        if (options.material) total += options.material.price;
        if (options.features) {
            options.features.forEach(f => total += f.price);
        }

        setPrice(total);
    }, [type, options]);

    return (
        <main className="grid md:grid-cols-3 gap-6 p-6">
            <FurnitureSelector type={type} setType={setType} />
            <CustomizationPanel
                data={furnitureData[type]}
                setOptions={setOptions}
            />
            <div>
                <FurniturePreview
                    image={furnitureData[type].image}
                    alt={`${type} preview`}
                />
                <Summary type={type} options={options} price={price} />
            </div>
        </main>
    );
}

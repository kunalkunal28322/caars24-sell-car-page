import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SellCarPage() {
  const [carDetails, setCarDetails] = useState({
    brand: "",
    model: "",
    year: "",
    location: "",
    condition: "",
    estimatedPrice: null,
  });

  const handleChange = (e) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  const estimatePrice = () => {
    // Dummy price estimation logic
    const basePrice = 300000;
    const depreciation = (new Date().getFullYear() - carDetails.year) * 20000;
    const estimated = basePrice - depreciation;
    setCarDetails({ ...carDetails, estimatedPrice: estimated > 50000 ? estimated : 50000 });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-lg p-6 shadow-xl bg-white rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Sell Your Car in 3 Easy Steps</h2>
        <CardContent>
          <div className="space-y-4">
            <Input name="brand" placeholder="Car Brand" onChange={handleChange} className="w-full" />
            <Input name="model" placeholder="Car Model" onChange={handleChange} className="w-full" />
            <Input name="year" type="number" placeholder="Year of Purchase" onChange={handleChange} className="w-full" />
            <Input name="location" placeholder="Location" onChange={handleChange} className="w-full" />
            <Input name="condition" placeholder="Car Condition (Excellent/Good/Fair)" onChange={handleChange} className="w-full" />
            <Button onClick={estimatePrice} className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Instant Price</Button>
            {carDetails.estimatedPrice && (
              <p className="text-lg text-center mt-2 font-semibold">Estimated Price: ₹{carDetails.estimatedPrice}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

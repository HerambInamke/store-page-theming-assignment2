import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import { useNavigate } from 'react-router-dom';
import { defaultHospitals } from '../data/treatmentTypesData'

// Define the props type
interface TopHospitalsProps {
    hcfData?: {
        hospitals?: any[]
    }
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-500">{label}:</span>
        <span className="font-medium">{value}</span>
    </div>
);

const TopHospitals: React.FC<TopHospitalsProps> = ({ hcfData = { hospitals: [] } }) => {
    const navigate = useNavigate();
    const [hospitals, setHospitals] = useState<any[]>([]);

    useEffect(() => {
        const callApi = async () => {
            try {
                // Ensure we have an array to work with
                const hospitalsData = hcfData?.hospitals || [];
                const data = hospitalsData.slice(0, 3);
                const limit = 3 - data.length;
                
                const additionalData = [];
                if (limit > 0) {
                    for (let i = 0; i < limit; i++) {
                        if (defaultHospitals[i]) {
                            additionalData.push(defaultHospitals[i]);
                        }
                    }
                }

                setHospitals([...data, ...additionalData]);
            } catch (err) {
                console.error('Error in TopHospitals:', err);
                // Fallback to default hospitals if there's an error
                setHospitals(defaultHospitals.slice(0, 3));
            }
        }

        callApi();
    }, [hcfData]);

    return (
        <div className="w-full bg-gradient-to-b py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-12">
                    Top Hospitals
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hospitals.map((hospital, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-xl font-semibold mb-4">{hospital.name}</h2>
                            <div className="space-y-2">
                                <InfoRow label="Location" value={hospital.location} />
                                <InfoRow label="Specialty" value={hospital.specialty} />
                                <InfoRow label="Rating" value={hospital.rating} />
                            </div>
                            <Button
                                className="mt-4 w-full"
                                onClick={() => navigate(`/hospitals/${hospital.id}`)}
                            >
                                View Details
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopHospitals;
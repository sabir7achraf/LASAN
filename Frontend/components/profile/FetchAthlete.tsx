import Athlete from "@/entities/Athlete";

export async function fetchAthlete(): Promise<Athlete | null> {
    try {
        const response = await fetch('http://localhost:8080/athlete', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.athlete;
        } else {
            throw new Error("Erreur lors de la récupération des données utilisateur");
        }

    }catch (error) {
        console.error('Erreur:', error);
        return null;
    }
}
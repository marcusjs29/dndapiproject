
export const getAbilityScores = async (index) => {
    const result = await fetch (`https://www.dnd5eapi.co/api/ability-scores/${index}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });

    return await result.json();
}

export const getSkillsByIndex = async (index) => {
    const result = await fetch (`https://www.dnd5eapi.co/api/skills/${index}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });

    return await result.json();
}

export const getRaces = async (index) => {
    const result = await fetch (`https://www.dnd5eapi.co/api/races/${index}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });

    return await result.json();
}
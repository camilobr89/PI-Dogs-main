const axios = require("axios");
const { Dogs, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;

const getApiInfo = async () => {
    const urlApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
    //?api_key=${YOUR_API_KEY}
    const apiInfo = await urlApi.data.map(el => {
        return {
            id: el.id,
            name: el.name,
            min_weight: Number(el.weight.metric.slice(0, 2)),
            max_weight: Number(el.weight.metric.slice(4)),
            min_height: Number(el.height.metric.slice(0, 2)),
            max_height: Number(el.height.metric.slice(4)),
            temperament: el.temperament,
            life_span: el.life_span,
            image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`
        }
    })
    return apiInfo;
}

const dataBaseInfo = async () => {
    return await Dogs.findAll ({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
};

const getDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await dataBaseInfo();
    const allDogs = apiInfo.concat(dbInfo);
    return allDogs;  
};

module.exports = { getDogs };

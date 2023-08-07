import { Request, Response } from 'express';
import * as  CityModel  from './city_model';

const getCityData = async (req: Request, res: Response) => {
  try {
    let data = await CityModel.cityData();
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const addCityData = async (req: Request, res: Response) => {
  try {
    let data = CityModel.addCity(req.body.name, req.body.state);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const updateCityData = async (req: Request, res: Response) => {
  try {
    let data = CityModel.updateCity(req.body.name, req.body.state, req.params.id);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const deleteCityData = async (req: Request, res: Response) => {
  try {
    let data = CityModel.deleteCity(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

export default { getCityData, addCityData, updateCityData, deleteCityData };
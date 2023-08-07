import { Request, Response } from 'express';
import cinemaModel from './cinema_model';

const getCinemaData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await cinemaModel.cinemaData();
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const addCinemaData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = cinemaModel.addCinema(req.body.name, req.body.city_id, req.body.code, req.body.address);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const updateCinemaData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = cinemaModel.updateCinema(req.body.name, req.body.city_id, req.body.code, req.body.address, req.params.id);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const deleteCinemaData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = cinemaModel.deleteCinema(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

export default { getCinemaData, addCinemaData, updateCinemaData, deleteCinemaData };
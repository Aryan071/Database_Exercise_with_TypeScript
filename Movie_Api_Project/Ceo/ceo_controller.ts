import { Request, Response } from 'express';
import ceoModel from './ceo_model';

const getCustomerData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await ceoModel.customerData();
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const getBookingData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await ceoModel.bookingData();
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const getUniqueCustomerData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await ceoModel.uniqueCustomer();
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

const getSelectedCustomerData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = await ceoModel.selectedCustomer(+req.params.movie_id, +req.params.cinema_id);
    return res.json(data);
  } catch (error) {
    return res.json({ status: "failed to fetch" });
  }
};

export default { getCustomerData, getBookingData, getUniqueCustomerData, getSelectedCustomerData };
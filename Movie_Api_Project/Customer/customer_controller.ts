import { Request, Response } from 'express';
import customerModel from './customer_model';

const getMovieData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await customerModel.getMovieData(req.params.id);
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
};

const searchMovieData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await customerModel.searchMovie(req.params.movie_name);
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}

const getShowSeatingPlanData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await customerModel.showSeatingPlanData(
            req.query.city_name as string,
            req.query.movie_name as string,
            req.query.cinema_name as string,
            req.query.cinema_hall_name as string,
            req.query.date_of_the_show as string,
            req.query.time_of_the_show as string,
        );
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}

const getTopTenActorsData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await customerModel.topTenActorsData();
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}

const searchMovieByYearData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await customerModel.searchMovieByYear(req.params.year);
        return res.json(data);
    } catch (error) {
        return res.json({ status: "failed to fetch" });
    }
}

export default { getMovieData, searchMovieData, getShowSeatingPlanData, getTopTenActorsData, searchMovieByYearData };
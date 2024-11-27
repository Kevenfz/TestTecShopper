import { Request, Response } from "express";
import {
  getDistanceFromGoogleMaps,
  calculateFare,
} from "../services/rideService";
import { Ride } from "../models/Ride";

export const estimateRide = async (req: Request, res: Response) => {
  try {
    const { origin, destination } = req.body;
    const distance = await getDistanceFromGoogleMaps(origin, destination);
    const fare = calculateFare(distance);
    res.status(200).json({ distance, fare });
  } catch (error) {
    res.status(500).json({ error: "Erros estimating ride" });
  }
};

export const confirmRide = (req: Request, res: Response) => {
  res.status(200).json({ message: "Confirm Ride Placeholder" });
};

export const getRides = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Rides Placeholder" });
};

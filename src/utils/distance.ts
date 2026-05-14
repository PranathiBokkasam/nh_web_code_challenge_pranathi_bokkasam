import { samplePatients, type GeoLocation } from "../data/locations";

type Coordinate = {
  latitude: number;
  longitude: number;
};

const EARTH_RADIUS_MILES = 3958.8;

function toRadians(degree: number): number {
  return (degree * Math.PI) / 180;
}

function normalizeAddress(address: string): string {
  return address.trim().toLowerCase().replace(/\s+/g, " ");
}

export function calculateHaversineDistanceInMiles(
  from: Coordinate,
  to: Coordinate
): number {
  const latitudeDifference = toRadians(to.latitude - from.latitude);
  const longitudeDifference = toRadians(to.longitude - from.longitude);

  const fromLatitude = toRadians(from.latitude);
  const toLatitude = toRadians(to.latitude);

  const a =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(fromLatitude) *
      Math.cos(toLatitude) *
      Math.sin(longitudeDifference / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Number((EARTH_RADIUS_MILES * c).toFixed(2));
}

export function getPatientLocation(patientAddress: string): GeoLocation {
  const normalizedPatientAddress = normalizeAddress(patientAddress);

  if (!normalizedPatientAddress) {
    throw new Error("Patient address is required");
  }

  const patient = samplePatients.find(
    (samplePatient) =>
      normalizeAddress(samplePatient.address) === normalizedPatientAddress
  );

  if (!patient) {
    throw new Error(
      "Patient address is not manually geocoded. Please use one of the sample patient addresses."
    );
  }

  return patient;
}
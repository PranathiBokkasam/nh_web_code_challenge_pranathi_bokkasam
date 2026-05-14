import { clinicians, labs } from "../data/locations";
import { calculateHaversineDistanceInMiles, getPatientLocation } from "./distance";

export type DispatchResult = {
  clinicianName: string;
  totalDistance: number;
  labName?: string;
};

export function findOptimalClinician(
  patientAddress: string,
  labDropoffRequired: boolean
): DispatchResult {
  const patientLocation = getPatientLocation(patientAddress);

  const routeResults = clinicians.map((clinician) => {
    const clinicianToPatient = calculateHaversineDistanceInMiles(
      clinician,
      patientLocation
    );

    if (!labDropoffRequired) {
      return {
        clinicianName: clinician.name,
        totalDistance: Number((clinicianToPatient * 2).toFixed(2)),
      };
    }

    const bestLabRoute = labs
      .map((lab) => {
        const patientToLab = calculateHaversineDistanceInMiles(
          patientLocation,
          lab
        );

        const labToClinician = calculateHaversineDistanceInMiles(
          lab,
          clinician
        );

        return {
          clinicianName: clinician.name,
          labName: lab.name,
          totalDistance: Number(
            (clinicianToPatient + patientToLab + labToClinician).toFixed(2)
          ),
        };
      })
      .sort((a, b) => a.totalDistance - b.totalDistance)[0];

    return bestLabRoute;
  });

  return routeResults.sort((a, b) => a.totalDistance - b.totalDistance)[0];
}
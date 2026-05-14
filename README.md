## Production Considerations

### 1. Limiting Factors of the MVP

If this MVP were released to production as-is, the biggest limitation is that the distance calculation is mocked. The app currently returns a random distance between two addresses instead of using real drive distance or real drive time.

Users would immediately run into the following issues:

- The recommended clinician may change every time the button is clicked because the distance value is randomly generated.
- The app does not validate whether the patient address is real or complete.
- The app does not calculate actual routes, traffic, or travel time.
- The app does not consider clinician availability, working hours, or current location.
- The app does not persist dispatch decisions or provide an audit history.
- The app does not handle edge cases such as invalid addresses, unavailable clinicians, or closed labs.
- The app has no authentication, authorization, or role-based access control.
- The app has no backend integration, so all data is static and local to the frontend.

For a production release, the distance calculation should be replaced with a real maps or routing API such as Google Maps, Mapbox, or another dispatch/routing service. The system should also include address validation, clinician availability, lab availability, proper error handling, and backend persistence.

### 2. Other Factors to Consider When Assigning a Clinician

Besides drive time, a real dispatch system could consider:

- Clinician availability and schedule
- Clinician’s current location, not just home address
- Patient appointment time window
- Visit urgency or priority
- Clinician specialty or qualification
- Patient preferences or continuity with a previous clinician
- Clinician workload and number of assigned visits for the day
- Traffic conditions
- Weather conditions
- Lab operating hours
- Service area or clinician territory
- Estimated visit duration
- Required equipment or supplies
- Cost of travel
- Fair distribution of work across clinicians

## Bonus: Haversine Distance

Clinician, lab, and sample patient addresses are manually geocoded using latitude and longitude.

The app uses the Haversine formula to calculate approximate "crow-flies" distance between two coordinates.

Because this is a frontend-only app and does not use a real geocoding API, only the listed sample patient addresses have real coordinates. If a user enters another address, the app uses a default Minneapolis coordinate.

In production, the patient address should be converted to latitude and longitude using a real geocoding API before calculating distance.
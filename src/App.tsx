import { useState } from "react";
import "./app.css";
import { findOptimalClinician, type DispatchResult } from "./utils/dispatch";
// import { samplePatients } from "./data/locations";


function App() {
  const [patientAddress, setPatientAddress] = useState("");
  const [labDropoffRequired, setLabDropoffRequired] = useState(false);
  const [result, setResult] = useState<DispatchResult | null>(null);
  const [error, setError] = useState("");
  console.log("result:", result);

  const handleFindOptimalClinician = () => {
    try {
      setError("");
      const dispatchResult = findOptimalClinician(
        patientAddress,
        labDropoffRequired
      );

      setResult(dispatchResult);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <main className="app-page">
      <section className="app-card">
        <div className="header-section">
          <p className="header-part">Nice Healthcare</p>
          <h1 className="app-title">Clinician Dispatch Dashboard</h1>
          <p className="app-subtitle">
            Find the clinician with the lowest estimated round-trip travel
            distance for a patient home visit.
          </p>
        </div>


<div className="form-section">
  <label className="form-label" htmlFor="patientAddress">
    Patient Address
  </label>

  {/* <select
    id="patientAddress"
    className="address-input"
    value={patientAddress}
    onChange={({ target: { value } }) => setPatientAddress(value)}
  >
    <option value="">Select patient address</option>

    {samplePatients.map((patient) => (
      <option key={patient.address} value={patient.address}>
        {patient.name} - {patient.address}
      </option>
    ))}
  </select> */}
  
  <input
    id="patientAddress"
    className="address-input"
    type="text"
    placeholder="Enter patient address"
    value={patientAddress}
    onChange={({ target: { value } }) => setPatientAddress(value)}
  />


  <label className="checkbox-row">
    <input
      type="checkbox"
      checked={labDropoffRequired}
      onChange={({ target: { checked } }) =>
        setLabDropoffRequired(checked)
      }
    />
    <span>Lab Drop-off Required</span>
  </label>

  <button
    className="primary-button"
    type="button"
    onClick={handleFindOptimalClinician}
  >
    Find Optimal Clinician
  </button>
</div>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <section className="result-card">
            <p className="result-label">Best Match</p>

            <h2 className="result-name">{result.clinicianName}</h2>

            <p className="result-distance">
              {result.totalDistance.toFixed(2)} miles
            </p>

            {result.labName && (
              <p className="result-lab">Selected Lab: {result.labName}</p>
            )}
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
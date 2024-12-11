const AddressInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
      <div>
          <h2>Address</h2>
          <label>
              Address:
              <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
              />
          </label>
          <label>
              City:
              <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
              />
          </label>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
      </div>
  );
};

export default Address;
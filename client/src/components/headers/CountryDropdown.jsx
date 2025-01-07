import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

export const Country = ({ countries = [] }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("España");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpenModal(false);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = allCountries.filter((country) =>
      country.country.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  // Combine the hardcoded countries with the provided countries prop
  const allCountries = [
    { id: "1", country: "Asuncion" },
    { id: "2", country: "CDE" },
    { id: "3", country: "Itapua" },
    { id: "4", country: "Caazapa" },
    { id: "5", country: "Misiones" },
    { id: "6", country: "Alto Paraguay" },
    { id: "7", country: "Boqueron" },
    { id: "8", country: "San Pedro" },
    { id: "9", country: "Neembucu" },
    { id: "10", country: "Concepcion" },
    ...countries,
  ];

  return (
    <div className="country-selector">
      <Button
        className="country-dropdown w-100 d-flex align-items-center justify-content-between"
        variant="outline-secondary"
        onClick={() => setIsOpenModal(true)}
      >
        <div className="d-flex flex-column align-items-start">
          <span className="label text-muted small">Your Location</span>
          <p className=" name">{selectedCountry}</p>
        </div>
        <FaAngleDown className="ml-auto " />
      </Button>

      <Modal
        show={isOpenModal}
        onHide={() => setIsOpenModal(false)}
        centered
        className="location-modal"
      >
        <Modal.Header className="border-bottom-0 pb-0">
          <div>
            <Modal.Title as="h5">Choose your delivery location</Modal.Title>
            <p className="text-muted mb-0">
              Enter your address and we'll specify the offer for your area
            </p>
          </div>
          <Button
            variant="link"
            className="position-absolute top-0 end-0 p-3"
            onClick={() => setIsOpenModal(false)}
          >
            <IoClose size={24} />
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className="position-relative mb-3">
            <Form.Control
              type="text"
              placeholder="Search your area..."
              value={searchQuery}
              onChange={handleSearch}
              className="pe-4"
            />
            <IoIosSearch
              size={24}
              className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
            />
          </div>

          <div
            className="country-list"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            {(searchQuery ? filteredCountries : allCountries).map((item) => (
              <Button
                key={item.id}
                variant="link"
                className={`w-100 text-start text-decoration-none ${
                  selectedCountry === item.country ? "bg-light" : ""
                }`}
                onClick={() => handleCountrySelect(item.country)}
              >
                {item.country}
              </Button>
            ))}
            {searchQuery && filteredCountries.length === 0 && (
              <p className="text-center text-muted py-3">No locations found</p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Country;

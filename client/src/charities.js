import { Link } from 'react-router-dom';
import './charities.css'
import React, { useEffect, useState } from "react";

function CharityDetails() {
  const [charityData, setCharityData] = useState([]);

  useEffect(() => {
    fetch("/charities") // Fetch the charity data endpoint from your backend
      .then((res) => res.json())
      .then((data) => {
        setCharityData(data);
      })
      .catch((error) => {
        console.error("Error fetching charity data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`/charities/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Update the charityData state to reflect the changes
          setCharityData(charityData.filter((charity) => charity.id !== id));
        } else {
          console.error("Error deleting charity:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error deleting charity:", error);
      });
  };

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Available Charities</h2>
      <div className="charity-card-container">
        {charityData.map((charity) => (
          <div key={charity.id} className="charity-card">
            <h2>{charity.name}</h2>
            <img src={charity.image} alt='charity-image' />
            <h4>About us</h4>
            <p>{charity.description}</p>
            <Link to='/donations'>
              <button onClick={() => handleDelete(charity.id)}>Donate</button>

            </Link>

            <button onClick={() => handleDelete(charity.id)} id='learn-more'>Learn more...</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharityDetails;

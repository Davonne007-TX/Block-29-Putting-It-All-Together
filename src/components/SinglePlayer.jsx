import React from 'react'

export default function SinglePlayer({player, setSelectedPlayer}) {

  return (
    <div className="puppies-container">
      <h2>You have Selected Puppy Contender &#x2199;</h2>
        <p>Name: {player.name}</p>
        <img src={player.imageUrl} className="dogImages" />
        <p>Breed: {player.breed}</p>
        <p>Cohort Id: {player.cohortId}</p>
        <p>ID: {player.id}</p>
        <p>{player.cohortId}</p>
        <p>Status {player.status}</p>
        <button className="goBack" onClick={() => setSelectedPlayer(null)}>
          Back to List</button>
   </div>
  )
}

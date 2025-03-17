import { useParams } from 'react-router-dom';
import { discoverCardList } from '../home/modules/discover/mock-data/discoverCardList'; // Примерный массив карточек
import { ReactElement } from 'react';
import './CabinDetailsStyle.css';

export const CabinDetailsPage = (): ReactElement => {
  const { id } = useParams<{ id: string }>(); // Получаем id из URL

  // Ищем карточку по id
  const selectedCard = discoverCardList.find((card) => card.id === Number(id));

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className="cabin-details container">
      <h1>{`${selectedCard.title} ~ ID: ${selectedCard.id}`}</h1>
      <img src={selectedCard.img} alt="card-img" />
      <div className="description">
        <span>Location: {selectedCard.location}</span>
        <span>Price: {selectedCard.price}</span>
        <p>{selectedCard.text}</p>
      </div>
      <div className="description">
        <h2>Description:</h2>
        <p>
            Immerse yourself in an atmosphere of privacy
            and tranquility with this cozy country home
            nestled in the beautiful Hampshire countryside.
            Our cabin offers the perfect blend of comfort and nature, with breathtaking views of woods and hills.
            This place will be your escape from the hustle and bustle of the city
            and provide a unique opportunity to enjoy the peace and fresh air.
        </p>
      </div>
      <div className="description">
        <h2>Features:</h2>
        <p>
            Spacious living room with fireplace for warm evenings.
            Cozy kitchen for preparing home-cooked dinners.
            Spacious terrace with barbecue area, ideal for al fresco family dinners.
            Comfortable bedrooms, each with panoramic views of nature.
            Bathroom with shower and modern fixtures and fittings.
            Free Wi-Fi to stay connected.
            This house is suitable for families, couples or friends,
            and is ideal for people looking for an outdoor vacation with the comforts of home.
            There are scenic meadows, woods, and hills to stroll around,
            and for outdoor enthusiasts, there are hiking trails and picnic areas nearby.
        </p>
      </div>
      <div className="description">
        <h2>Features:</h2>
        <p>
            Spacious living room with fireplace for warm evenings.
            Cozy kitchen for preparing home-cooked dinners.
            Spacious terrace with barbecue area, ideal for al fresco family dinners.
            Comfortable bedrooms, each with panoramic views of nature.
            Bathroom with shower and modern fixtures and fittings.
            Free Wi-Fi to stay connected.
            This house is suitable for families, couples or friends,
            and is ideal for people looking for an outdoor vacation with the comforts of home.
            There are scenic meadows, woods, and hills to stroll around,
            and for outdoor enthusiasts, there are hiking trails and picnic areas nearby.
        </p>
      </div>
      <div className="description">
        <h2>Benefits:</h2>
        <p>
            Secluded area for personal recreation.
            Great outdoor recreational facilities.
            Plenty of places to walk and explore outdoor adventures.
            Close proximity to major hiking trails and attractions in the region.
            Plan a vacation in this secluded corner where every day brings new discoveries
            and the evening sky with millions of stars turns your nights into magic.
        </p>
      </div>
    </div>
  );
};

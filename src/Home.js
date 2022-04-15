const Home = () => {
  return (
    <>
      <div className="homeCard">
        <div className="welcome">
          <h1>Welcome to Feet Heat!</h1>
          <h2>The Hottest Shoe Trends Online.</h2>
        </div>
        <div class="newReleases-container">
          <h2>NEW RELEASES</h2>
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
        </div>
        <div class="categories-container">
          <h2>Categories</h2>
          <div class="grid-item">Basketball</div>
          <div class="grid-item">Running</div>
          <div class="grid-item">Casual</div>
          <div class="grid-item">Swimming</div>
          <div class="grid-item">Hiking</div>
          <div class="grid-item">Cross Training</div>
        </div>
      </div>
    </>
  );
};

export default Home;

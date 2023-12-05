function createBees() {
    for (let i = 0; i < 3; i++) {
      const bee = document.createElement('div');
      bee.className = 'bee';
      bee.style.left = `${30 * i + 10}%`; 
      bee.style.animationDelay = `${i}s`; 

      const beeImage = document.createElement('img');
      beeImage.src = 'IMG/bee-png.webp'; 
      bee.appendChild(beeImage);

      document.body.appendChild(bee);
    }
  }
  
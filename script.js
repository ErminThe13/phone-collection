fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector('#mobiteli tbody');
    tbody.innerHTML = '';  // očisti, ako si slučajno duplirao
    data.forEach(item => {
      const tr = document.createElement('tr');
      tr.className = item.status;  // boja reda po statusu

      // Sastavljamo HTML za redak
      tr.innerHTML = `
        <td>
          ${item.image
            ? `<a href="${item.image}" target="_blank">
                 <img src="${item.image}" alt="${item.model}">
               </a>`
            : ''}
        </td>
        <td>${item.model}</td>
        <td>${item.godina}</td>
        <td>${item.ekran}</td>
        <td>${item.memorija}</td>
        <td>${item.status}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => console.error('Greška pri učitavanju data.json:', err));

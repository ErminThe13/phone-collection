fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector('#mobiteli tbody');
    data.forEach(item => {
      const tr = document.createElement('tr');
      tr.className = item.status;
      tr.innerHTML = `
        <td>${item.model}</td>
        <td>${item.godina}</td>
        <td>${item.ekran}</td>
        <td>${item.memorija}</td>
        <td>${item.status}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => console.error(err));

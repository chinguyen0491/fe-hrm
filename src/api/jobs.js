export function getJobs() {
    return fetch('http://test.diligo.vn:15000/api/v1/recruitment')
      .then(data => data.json())
  }
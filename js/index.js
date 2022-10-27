async function getData() {
  const res = await fetch('https://hp.health.gov.lk/api/get-current-statistical')
  const data = await res.json()
  if (data.success) {
    console.log('CONNECTED TO THE API')
    console.log(data.data)
    document.getElementById('time').innerHTML = `UPDATED TIME: ${data.data.update_date_time}`
    document.getElementById('global-container').innerHTML = (`
              <h2>Global Info</h2>
      <div class="global-deaths"><b>Global Deaths:</b> ${data.data.global_deaths}</div>
      <div class="global-new-cases"><b>Global New Cases:</b> ${data.data.global_new_cases}</div>
      <div class="global-new-deaths"><b>Global New Deaths:</b> ${data.data.global_new_deaths}</div>
      <div class="global-recovered"><b>Global Recovered:</b> ${data.data.global_recovered}</div>
      <div class="global-total-cases"><b>Global Total Cases:</b> ${data.data.global_total_cases}</div>

    `)
    document.getElementById('local-container').innerHTML = (`
    <h2>Local Info</h2>
    <div class="local-active-cases"><b>Local Active Cases:</b> ${data.data.local_active_cases}</div>
    <div class="local-deaths"><b>Local Deaths:</b> ${data.data.local_deaths}</div>
    <div class="local-new-cases"><b>Local New Cases:</b> ${data.data.local_new_cases}</div>
    <div class="local-new-deaths"><b>Local New Deaths:</b> ${data.data.local_new_deaths}</div>
    <div class="local-recovered"><b>Local Recovered:</b> ${data.data.local_recovered}</div>
    <div class="local-total-cases"><b>Local Total Cases:</b> ${data.data.local_total_cases}</div>
    <div class="total-antigen-test"><b>Total Antigen Tesing Count:</b> ${data.data.total_antigen_testing_count}</div>
    <div class="total-pcr-test"><b>Total PCR Testing Count:</b> ${data.data.total_pcr_testing_count}</div>

    `)
  }
}
getData().then(() => {
  console.log('Data Loded')
}).catch((err) => {
  console.log(err)
  document.body.innerHTML = `${err}`
})

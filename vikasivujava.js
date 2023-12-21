function laskeBMI() {
  const paino = parseFloat(document.getElementById('paino').value);
  const pituus = parseFloat(document.getElementById('pituus').value) / 100;

  if (paino > 0 && pituus > 0) {
    const bmi = paino / (pituus * pituus);
    const vastausbmi = document.getElementById('vastaus');
    vastausbmi.textContent = `Sinun BMI on ${bmi.toFixed(2)}`;

    let bmiluokka = '';
    if (bmi < 15) {
      bmiluokka = 'Sairaalloinen alipaino';
    } else if (bmi >= 15 && bmi < 18) {
      bmiluokka = 'Merkittävä alipaino';
    } else if (bmi >= 18 && bmi < 19) {
      bmiluokka = 'Lievä alipaino';
    } else if (bmi >= 19 && bmi < 25) {
      bmiluokka = 'Normaali paino';
    } else if (bmi >= 25 && bmi < 30) {
      bmiluokka = 'Lievä ylipaino';
    } else if (bmi >= 30 && bmi < 35) {
      bmiluokka = 'Merkittävä ylipaino';
    } else if (bmi >= 35 && bmi < 40) {
      bmiluokka = 'Vaikea ylipaino';
    } else {
      bmiluokka = 'Sairaalloinen ylipaino';
    }

    const bmiarvo = document.getElementById('bmiluokka');
    bmiarvo.textContent = `BMI-luokkasi: ${bmiluokka}`;

    }
}

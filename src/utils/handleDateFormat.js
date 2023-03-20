const monthsUa = {
  січня: 'січень',
  лютого: 'лютий',
  березня: 'березень',
  квітня: 'квітень',
  травня: 'травень',
  червня: 'червень',
  липня: 'липень',
  серпня: 'серпень',
  вересня: 'вересень',
  жовтня: 'жовтень',
  листопада: 'листопад',
  грудня: 'грудень',
};

function handleDateFormat(date, language) {
  const dateArray = date.split(' ');
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (language === 1) {
    const dateUa = new Date(date).toLocaleDateString('ua-UA', options);

    if (dateArray.length === 3) {
      const newDateUa = dateUa.split(' ').slice(0, 3);
      newDateUa[1] += ',';

      return newDateUa.join(' ');
    }

    if (dateArray.length === 2) {
      const newDateUa = dateUa.split(' ').slice(1, dateArray.length + 1);
      newDateUa[0] = monthsUa[newDateUa[0]];

      return newDateUa.join(', ');
    }

    if (dateArray.length === 1) {
      return dateArray.join('');
    }
  }

  return date;
}

export default handleDateFormat;

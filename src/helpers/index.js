import _ from 'lodash';

export const groupBy = (collection, groupKey) => {
  return _.reduce(collection, (res, item, key) => {
    if (!item.hasOwnProperty(groupKey)) return res;
    const group = item[groupKey];
    if (!res[group]) res[group] = {};
    res[group][key] = item;
    return res;
  }, {});
}

export const orderBy = (key, order='asc') => {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0; 

    const varA = (typeof a[key] === 'string') ? 
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? 
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// export const validate = (rule, {...fields}) => {
//   const errors = {}
//   switch (rule) {
//     case 'required':
//       errors = _.reduce(fields, (res, field, key) => {
//         if (!field.trim()) res[key] = 'This field is required'
//         return res
//       }, {})
//   }
//   return errors
// }

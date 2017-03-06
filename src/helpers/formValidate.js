export const validate = (rule, {...fields}) => {
  const errors = {}
  switch (rule) {
    case 'required':
      errors = _.reduce(fields, (res, field, key) => {
        if (!field.trim()) res[key] = 'This field is required'
        return res
      }, {})
  }
  return errors
}

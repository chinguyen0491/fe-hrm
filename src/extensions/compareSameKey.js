export const compareSameKey = (input) => {
  // eslint-disable-next-line
  const cates = [... new Set(input.map(val => val.cate))]
  const test = cates.map(val => {
      return {
          category: val,
          job: input.filter(b => b.cate === val).map(c => c.job)
      }
  })
  // console.log('dataMapped',dataMapped)
  return test;
};

export const compareSameKey = (input) => {
    // eslint-disable-next-line
    const output = input.reduce((a, o) => (a[o.title] ? a[o.title].job += ( ":" + o.job) : a[o.title] = o, a), {}) 
    Object.values(output).map(e => ({title:e.title,job:e.job.split(":")}) )
    console.log(output)
    return Object.values(output).map(e => ({title:e.title,job:e.job.split(":")}) )
};

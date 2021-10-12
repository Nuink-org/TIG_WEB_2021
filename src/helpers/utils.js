export const linearInterpolate = (start, end, ratio) => {
    return (1 - ratio) * start + ratio * end
}
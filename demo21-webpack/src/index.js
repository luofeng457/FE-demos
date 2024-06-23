export default function () {
    // console info
    import('./add').then(
        ({ add })=> console.log('add res = ', add(1, 3))
    )
    console.log('rm console loader test==');
    return 'hello index file.......';
}

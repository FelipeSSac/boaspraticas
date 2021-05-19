let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `
<div>
    <p>Ooooops, pagina não encontrada</p>
</div>
`

export default Error404;
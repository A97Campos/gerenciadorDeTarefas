function Button(props) {
    return (
        <button className="bg-slate-400 p-2 rounded-md text-white" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
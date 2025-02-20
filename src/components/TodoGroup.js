const style = {
    backgroundColor: "#FAFAFA",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "12px",
    borderColor: "#E0E0E0",
};

const dateStyle = {
    paddingLeft: "max(20px, 2vw)",
};

const itemStyle = {
    paddingLeft: "0px",
    marginLeft: "max(20px, 4vw)",
    marginRight: "max(20px, 4vw)",
};


function TodoGroup(props) {
    return (
        <div style={style}>
            <h3 style={dateStyle}>Hoy, 25 de enero del 2025</h3>
            <ul style={itemStyle}>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoGroup };
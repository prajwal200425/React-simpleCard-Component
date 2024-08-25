function Price({ oldPrice, newPrice }) {
    let old = {
        textDecoration: "line-through",
    };

    let newStyle = {
        fontWeight: "bold",
    };

    let styles = {
        backgroundColor : "#e0c367",
        height:"30px",
        justifyContent : "center",
        alignItems:"center",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",

    };
    return (
        <div style={styles}>
            <span style={old}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>

        </div>
    );
}
export default Price
/* eslint-disable react/prop-types */
function Record({label, infoData, field}) {
    return (
        <p>{label}: {infoData[field]}</p>
    );
}

export default Record;
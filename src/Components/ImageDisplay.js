import React from 'react'

const ImageDisplay = ({reasults}) => {
    const disPlay = reasults.map((res) => {
            return <img src={res.urls.regular} alt={res.alt_description} style={{height: "300px", width: "400px", objectFit: "cover"}} className='img-thumbnail'/>
    })
    const displayItems = () => {
            return (<div className='row'>
                        <table className="table">
                            <tbody>
                              <tr>
                                <td scope="col">
                                    {disPlay}
                                </td>
                              </tr>
                            </tbody>
                        </table>
                    </div>)
    }
    return ( <div>
        {displayItems({reasults})}
        </div> );
}
 
export default ImageDisplay;

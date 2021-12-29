import React from 'react';

const Accordian = (props) => {
    const itemsDisplay = (props) => props.items.map((item, index) => {
    return(
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id={`flush-heading${index}`}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                  {item.head}
                </button>
              </h2>
              <div id={`flush-collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">{item.body}</div>
              </div>
            </div>
        </div>
    )})
    return(<div>
        {itemsDisplay(props)}
        </div>)
}

export default Accordian;
import React from 'react'
  
function createMarkup() {
  return {__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.2996975117203!2d-118.29263338481928!3d34.0874621233208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c76e1de98fa5%3A0x17d95c4a10b2b4aa!2sDJ+Zaki!5e0!3m2!1sen!2sus!4v1547181616864" style="border:0" allowfullscreen="" width="100%" height="450" frameborder="0"></iframe>'};
}

const GoogleMap = () => (
  <div>
    
      <div dangerouslySetInnerHTML={createMarkup()} />
    
  </div>
)

export default GoogleMap

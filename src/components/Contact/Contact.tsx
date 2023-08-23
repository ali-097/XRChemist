import { useState, ChangeEvent, FormEvent } from 'react'; // Import ChangeEvent and FormEvent
import envelope from '../../../public/envelope.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
    range: '',
    timeline: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        name: '',
        email: '',
        details: '',
        range: '',
        timeline: ''
    })
  };

  return (
    <div className='contact--container'>
      <div className='contact--description'>
        <h1 className='contact--description--title'>Got a Project in mind?</h1>
        <p className='contact--description--text'>
          Use the Form to tell us about your project. We'll get back to you as soon as we can.
        </p>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className='contact--form--element'>
            <label className='contact--form--label' htmlFor='name'>
                Your Name
            </label>
            <input
              className='contact--form--input'
              id='name'
              type='text'
              value={formData.name}
              name='name'
              placeholder='Name'
              onChange={handleInputChange}
            ></input>
          </div>
          <div className='contact--form--element' style={{marginLeft: "27.18px"}}>
            <label className='contact--form--label' htmlFor='email'>
                Your Email
            </label>
            <input
              className='contact--form--input'
              id='email'
              type='text'
              value={formData.email}
              name='email'
              placeholder='Email'
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <div className='contact--form--element'>
                <label className='contact--form--label' htmlFor='details'>
                Your Project Details
                </label>
                <textarea
                    className='contact--form--input'
                    id='details'
                    value={formData.details}
                    name='details'
                    placeholder='Project Details'
                    onChange={handleInputChange}
                    style={{height: "123px", width:'528px', resize:"none", fontFamily: 'Arial', fontSize:"13px"}}
                ></textarea>
            </div>
        </div>
          <div className='contact--form--element'>
            <label className='contact--form--label' htmlFor='range'>
              Your Budget Range
            </label>
            <input
              className='contact--form--input'
              id='range'
              type='text'
              value={formData.range}
              name='range'
              placeholder='Budget Range'
              onChange={handleInputChange}
            ></input>
          </div>
          <div className='contact--form--element' style={{marginLeft: "27.18px"}}>
            <label className='contact--form--label' htmlFor='timeline'>
              Your Timeline
            </label>
            <input
              className='contact--form--input'
              id='timeline'
              type='text'
              value={formData.timeline}
              name='timeline'
              placeholder='Timeline'
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <div className='contact--form--element'>
                <button className='contact--form--button' type='submit'>
                <img src={envelope} alt='Envelope' className="contact--form--button--img" />
                <p className='contact--form--button--text'>Send Message</p>
                </button>
            </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react'
import '../../styles/booking-form.css'
import { Form, FormGroup } from 'reactstrap'

const BookingForm = () => {
  return (
    <Form>
        <FormGroup className='booking__form d-inline-block me-4 mb-4'>
            <input type="text" placeholder='Primeiro Nome' />
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <input type="text" placeholder='Ultimo Nome' />
        </FormGroup>

        <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
            <input type="email" placeholder='Email' />
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <input type="number" placeholder='Celular' />
        </FormGroup>

        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <input type="text"  placeholder='Endereço'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <input type="text" placeholder='Endereço de entrega' />
        </FormGroup>


        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <select name='' id=''>
                <option value="1 person">1 pessoa</option>
                <option value="2 person">2 pessoa</option>
                <option value="3 person">3 pessoa</option>
                <option value="4 person">4 pessoa</option>
                <option value="5+ person">5+ pessoa</option>
            </select>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <select name='' id=''>
                <option value="1 person">1 pessoa</option>
                <option value="2 person">2 pessoa</option>
                <option value="3 person">3 pessoa</option>
                <option value="4 person">4 pessoa</option>
                <option value="5+ person">5+ pessoa</option>
            </select>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <input type="date" placeholder='Escolha a Data' />
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
            <input type="time" placeholder='Escolha a Hora' className='time__picker' />
        </FormGroup>

        <FormGroup>
            <textarea
            rows={5}
            type='textarea'
            className='textarea'
            placeholder='Detalhes'
            >
            </textarea>
        </FormGroup>
    </Form>

  )
}

export default BookingForm
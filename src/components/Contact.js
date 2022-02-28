import React from 'react'
import {Form, Button} from 'react-bootstrap'

function Contact() {
return (
  <div>
    <section>
      <strong>Société Tunisienne de Banque</strong>
      <p><span>Adresse:</span> Rue Hédi Nouira - 1001 Tunis - Tunisie</p>
      <p><span>Tel:</span>70 140 000</p>
      <p><span>Fax:</span>70 143 333</p>
      <p><span>E-Mail: </span>Stb@Stb.Com.Tne</p>
      <p><span>Site web:</span>Www.Stb.Com.Tn</p>
      <p><span>Serveur vocal:</span>8840 1010</p>
    </section>
    <section>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Votre nom complet *</Form.Label>
        <Form.Control style={{backgroundColor: 'grey'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Votre adresse email *</Form.Label>
        <Form.Control style={{backgroundColor: 'grey'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Votre N° de téléphone</Form.Label>
        <Form.Control style={{backgroundColor: 'grey'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Votre message *</Form.Label>
        <Form.Control style={{height:"100px", backgroundColor: 'grey'}}/>
      </Form.Group>
      <Button 
      variant="primary" 
      type="submit"
      >
      Envoyer
      </Button>
    </Form>
    </section>
  </div>
  )
}

export default Contact
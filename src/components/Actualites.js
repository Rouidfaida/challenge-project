import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap'


function Actualites() {

  

  return (
    <div style={{marginBottom:'100px', backgroundColor:'blue'}}>
      <Container style={{marginLeft:'30%'}}>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>AVIS DE REPORT   APPEL D’OFFRES REF. AO 02/2022</Card.Title>
            <Card.Text>
            Il est porté à la connaissance des participants à l’Appel d’offres Réf. AO 02/2022 que la date limite prévue initialement pour le mercredi 2 Mars 2022 est reportée au vendredi 18 Mars 2022.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>AVIS DE REPORT   APPEL D’OFFRES REF. AO 02/2022</Card.Title>
            <Card.Text>
            Il est porté à la connaissance des participants à l’Appel d’offres Réf. AO 01/2022 que la date limite prévue initialement pour le lundi 21 Février 2022 est reportée au Lundi 07 Mars 2022.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>La STB BANK primée pour ses efforts de développement à l’International</Card.Title>
            <Card.Text>
            La STB BANK primée pour ses efforts de développement à l’International Une nouvelle consécration pour la STB BANK qui se distingue une fois de plus à l’échelle Internationale.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>AVIS DE CLOTURE DES SOUSCRIPTIONS A L'EMPRUNT OBLIGATAIRE</Card.Title>
            <Card.Text>
            STB FINANCE  ont le plaisir d’annoncer que les souscriptions ont été clôturé le 31 janvier 2022 pour un montant de 100 millions de dinars, sans recours à une période de prolongation.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>la cérémonie de la remise du trophée pour le développement à l’International à la STB Bank, organisée par le TABC.</Card.Title>
            <Card.Text>
            A l’occasion de la tenue de la conférence « Développement à l’International des entreprises tunisiennes : Défis et opportunités », Organisée par le TABC, la STB a été primée pour ses efforts de développement à l’International.          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>LA SOCIETE TUNISIENNE DE BANQUE : BANQUE PERFORMANTE ET ACTEUR INCONTOURNABLE DE L’ECONOMIE</Card.Title>
            <Card.Text>
            En dépit d’un contexte économique difficile marqué par le ralentissement de l’activité des secteurs d’activité clés en lien avec la crise sanitaire Covid-19, la banque a continué à jouer pleinement son rôle de partenaire privilégié des acteurs économiques.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>la participation de la STB BANK à la journée inaugurale de la plateforme électronique pour la création des entreprises en ligne</Card.Title>
            <Card.Text>
            la participation de la STB BANK à la journée inaugurale de la plateforme électronique pour la création des entreprises en ligne, organisée le 15 Décembre 2021, en présence de la Cheffe du gouvernement Madame Najla Bouden Romdhane.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>Une grande banque, la STB un partenaire officiel et exceptionnel d’un projet inédit : SKYS 2021</Card.Title>
            <Card.Text>
            Aujourd’hui c’est le jour d’une grande annonce celle d’un partenariat entre nous et la société Unisky Area.
            Nous sommes en effet très fiers de notre collaboration comme Partenaire Officiel de la première expérience de parachutisme civil en Tunisie : SKYS 2021 qui se tient au Sahara de Tozeur.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
      <Col xs={5}>
        <Card>
          <Card.Img variant="top" src="/IMG.png" />
          <Card.Body>
            <Card.Title>Don de deux appareils d'oxygénation Optiflow à CHU FARHAT HACHED SOUSSE</Card.Title>
            <Card.Text>
            Conscients de notre devoir patriotique et de l'importance des actions citoyennes et sociales, nous continuons à appuyer les efforts des hôpitaux dans ces conditions sanitaires particulières et exceptionnelles liées à la crise de la Covid.
  
  C'est dans cette optique que nous avons équipé le CHU Farhat Hached Sousse, par deux appareils d'oxygénation Optiflow.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
      </Container>
    </div>
    )
  }
  

export default Actualites
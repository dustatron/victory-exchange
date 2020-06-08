import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Image, Card } from 'react-bootstrap';

import { GlobalStyel } from '../../Layout/GlobalStyle';
import styled from 'styled-components';

function OfferReplys(props) {
  const CardSyle = styled.div`
    margin: 10px 0;
    box-shadow: ${GlobalStyel.shadow};
  `;
  return (
    <div>
      <div>{props.replies.length} Replies</div>

      {props.replies.map((reply) => {
        return (
          <CardSyle key={reply.replyId}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={2} md={4} className='text-center'>
                    <Image
                      src={reply.photoURL}
                      roundedCircle
                      style={{ width: '60%' }}
                    />
                  </Col>
                  <Col lg={5} md={8}>
                    <h4 className='text-center'>{reply.userName} </h4>
                  </Col>
                  <Col>
                    <Card.Subtitle className='mb-2 text-muted text-center'>
                      Posted at :
                      {new Date(reply.createdAt).toLocaleDateString()}
                    </Card.Subtitle>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <p>{reply.message}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </CardSyle>
        );
      })}
    </div>
  );
}

OfferReplys.propTypes = {
  replies: PropTypes.array,
};

export default OfferReplys;

// {props.replies.map(reply => {
//   return (
//     <div>
//       <Card>
//         <Card.body>
//           Hello
//           <Row>
//             <Col>
//               <Image src={reply.photoURL} roundedCircle />
//             </Col>
//             <Col>
//               <h3>{reply.userName} </h3>
//               <Card.Subtitle className='mb-2 text-muted'>Posted at :{reply.createdAt}</Card.Subtitle>
//               <hr />
//               <p>{reply.message}</p>
//             </Col>
//           </Row>
//         </Card.body>
//       </Card>
//     </div>
//   );
// })}

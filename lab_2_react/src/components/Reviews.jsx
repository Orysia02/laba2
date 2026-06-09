import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const myVariant = 13; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${myVariant}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error('Помилка завантаження відгуків:', err));
  }, []);

  return (
    <section className="reviews-section" style={{ padding: '20px' }}>
      <h3>Відгуки попередніх роботодавців</h3>
      <div style={{ display: 'grid', gap: '15px' }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h4>
              {comment.name} <span style={{ fontWeight: 'normal', color: '#666' }}>({comment.email})</span>
            </h4>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
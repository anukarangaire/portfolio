// Import your certificate images (add them to src/assets/ first)
import award1 from '../assets/award1.jpg'; // Replace with your image paths
import award2 from '../assets/awar2.jpg';
import award3 from '../assets/awar3.jpg';

const Certificates = () => {
  const honourCertificates = [
    { src: award1, alt: 'Honour Certificate 1', caption: 'Academic Excellence 2023' },
    { src: award2, alt: 'Honour Certificate 2', caption: 'Outstanding Student Award 2022' },
  ];

  const ecaCertificates = [
    { src: award3, alt: 'ECA Certificate 1', caption: 'Best Debater 2023' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Certificates</h1>

      <section>
        <h2>Honour</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}>
          {honourCertificates.map((cert, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img 
                src={cert.src} 
                alt={cert.alt} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <p>{cert.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>ECA</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}>
          {ecaCertificates.map((cert, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img 
                src={cert.src} 
                alt={cert.alt} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <p>{cert.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certificates;
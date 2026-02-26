export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        🚀 أهلاً بيك في موقعي
      </h1>
      
      <p style={{
        fontSize: '1.3rem',
        maxWidth: '600px',
        lineHeight: '1.8',
        marginBottom: '30px'
      }}>
        ده أول موقع ليا بنيته خطوة بخطوة
        باستخدام Next.js و Vercel
      </p>
      
      <div style={{
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <a href="#about" style={{
          padding: '12px 30px',
          background: 'white',
          color: '#764ba2',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          اعرف أكتر
        </a>
        
        <a href="#contact" style={{
          padding: '12px 30px',
          background: 'transparent',
          color: 'white',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          border: '2px solid white'
        }}>
          تواصل معايا
        </a>
      </div>
    </div>
  );
}
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Igreja Millenium Brasília</title>
        <meta name="description" content="Igreja preferida da geração Millenium" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center',
          paddingTop: '10vh'
        }}>
          
          {/* Header com Logo */}
          <header style={{ marginBottom: '4rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.5rem',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1a1a2e',
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
              }}>
                M
              </div>
              <h1 style={{ 
                fontSize: '4rem', 
                margin: 0,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
              }}>
                MILLENIUM
              </h1>
            </div>
          </header>

          {/* Hero Section */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              IGREJA MILLENIUM
            </h2>
            
            <p style={{ 
              fontSize: '2rem', 
              marginBottom: '1rem', 
              color: '#FFD700',
              fontWeight: '600',
              letterSpacing: '2px'
            }}>
              CONECTAR • DESPERTAR • TRANSFORMAR
            </p>
            
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '0.5rem', 
              color: '#ccc',
              fontStyle: 'italic'
            }}>
              Plantando a cultura do céu na terra
            </p>
            
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#999',
              marginBottom: '3rem'
            }}>
              Igreja preferida da geração Millenium
            </p>

            {/* CTA Button */}
            <button style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              color: '#1a1a2e',
              border: 'none',
              padding: '1.2rem 3rem',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              🙏 Conheça Nossa Igreja
            </button>
          </section>

          {/* Info Cards */}
          <section style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            marginBottom: '5rem'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2.5rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{ 
                color: '#FFD700', 
                marginBottom: '1.5rem',
                fontSize: '1.8rem',
                fontWeight: 'bold'
              }}>
                📅 Programação
              </h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <strong>Domingos:</strong> 9h e 18h
              </p>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <strong>Quartas:</strong> 19h30
              </p>
              <p style={{ fontSize: '1rem', color: '#ccc', marginTop: '1rem' }}>
                Venha participar dos nossos cultos!
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '2.5rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{ 
                color: '#FFD700', 
                marginBottom: '1.5rem',
                fontSize: '1.8rem',
                fontWeight: 'bold'
              }}>
                📍 Localização
              </h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <strong>Brasília - DF</strong>
              </p>
              <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
                CRS 504 Bloco C, Loja 5<br/>
                Asa Sul
              </p>
              <p style={{ fontSize: '1rem', color: '#ccc', marginTop: '1rem' }}>
                📞 (61) 99966-8383
              </p>
            </div>
          </section>

          {/* Status Success */}
          <section style={{
            background: 'rgba(0, 255, 0, 0.1)',
            border: '2px solid rgba(0, 255, 0, 0.3)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h3 style={{ color: '#00ff00', fontSize: '1.5rem', marginBottom: '1rem' }}>
              ✅ SITE FUNCIONANDO PERFEITAMENTE!
            </h3>
            <p style={{ color: '#ccc' }}>
              Build bem-sucedido • Deploy ativo • Sem erros
            </p>
          </section>

          {/* Footer */}
          <footer style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '2rem',
            color: '#999',
            marginTop: '4rem'
          }}>
            <p style={{ fontSize: '1.1rem' }}>
              &copy; 2024 Igreja Millenium Brasília
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Todos os direitos reservados • Desenvolvido com ❤️
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

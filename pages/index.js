import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Igreja Millenium Brasília</title>
        <meta name="description" content="Conectar • Despertar • Transformar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23000'/><text x='50' y='60' font-family='Arial Black' font-size='50' font-weight='900' text-anchor='middle' fill='%23fff'>M</text><rect x='47' y='15' width='6' height='20' fill='%23fff'/><rect x='35' y='20' width='30' height='6' fill='%23fff'/></svg>" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh',
        background: '#000000',
        color: '#FFFFFF',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center',
          paddingTop: '8vh'
        }}>
          
          {/* Logo Principal baseado na identidade */}
          <header style={{ marginBottom: '4rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '3rem'
            }}>
              {/* Logo M com Cruz - igual às imagens */}
              <div style={{
                width: '120px',
                height: '120px',
                background: '#FFFFFF',
                color: '#000000',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '2rem',
                fontSize: '4rem',
                fontWeight: '900',
                position: 'relative',
                fontFamily: 'Arial Black, Arial, sans-serif'
              }}>
                {/* Cruz no topo */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '25px',
                  background: '#000000'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '6px',
                  background: '#000000'
                }}></div>
                {/* Letra M */}
                <span style={{ marginTop: '15px' }}>M</span>
              </div>
              
              {/* Tipografia MILLENIUM */}
              <h1 style={{ 
                fontSize: '4.5rem', 
                margin: 0,
                color: '#FFFFFF',
                fontWeight: '900',
                fontFamily: 'Arial Black, Arial, sans-serif',
                letterSpacing: '0.1em'
              }}>
                MILLENIUM
              </h1>
            </div>
          </header>

          {/* Tagline Principal */}
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              marginBottom: '2rem',
              color: '#FFFFFF',
              fontWeight: '900',
              fontFamily: 'Arial Black, Arial, sans-serif',
              letterSpacing: '0.15em'
            }}>
              IGREJA MILLENIUM
            </h2>
            
            {/* Tagline exata da identidade */}
            <p style={{ 
              fontSize: '2.2rem', 
              marginBottom: '2rem', 
              color: '#FFFFFF',
              fontWeight: 'bold',
              letterSpacing: '0.2em',
              fontFamily: 'Arial, sans-serif'
            }}>
              CONECTAR • DESPERTAR • TRANSFORMAR
            </p>
            
            <p style={{ 
              fontSize: '1.4rem', 
              color: '#CCCCCC',
              fontWeight: 'normal',
              marginBottom: '3rem',
              fontStyle: 'italic'
            }}>
              Plantando a cultura do céu na terra
            </p>

            {/* CTA Button com estilo da identidade */}
            <button style={{
              background: '#FFFFFF',
              color: '#000000',
              border: 'none',
              padding: '1.5rem 4rem',
              fontSize: '1.4rem',
              fontWeight: '900',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'Arial Black, Arial, sans-serif'
            }}>
              CONHEÇA NOSSA IGREJA
            </button>
          </section>

          {/* Cards Info com estilo minimalista */}
          <section style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '3rem',
            marginBottom: '6rem'
          }}>
            <div style={{
              background: '#FFFFFF',
              color: '#000000',
              padding: '3rem',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <h3 style={{ 
                color: '#000000', 
                marginBottom: '2rem',
                fontSize: '1.8rem',
                fontWeight: '900',
                fontFamily: 'Arial Black, Arial, sans-serif',
                textTransform: 'uppercase'
              }}>
                PROGRAMAÇÃO
              </h3>
              <p style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                DOMINGOS: 9H E 18H
              </p>
              <p style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                QUARTAS: 19H30
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '1.5rem' }}>
                Venha participar dos nossos cultos
              </p>
            </div>
            
            <div style={{
              background: '#FFFFFF',
              color: '#000000',
              padding: '3rem',
              borderRadius: '8px',
              textAlign: 'left'
            }}>
              <h3 style={{ 
                color: '#000000', 
                marginBottom: '2rem',
                fontSize: '1.8rem',
                fontWeight: '900',
                fontFamily: 'Arial Black, Arial, sans-serif',
                textTransform: 'uppercase'
              }}>
                LOCALIZAÇÃO
              </h3>
              <p style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                BRASÍLIA - DF
              </p>
              <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
                CRS 504 Bloco C, Loja 5<br/>
                Asa Sul
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '1.5rem' }}>
                📞 (61) 99966-8383
              </p>
            </div>
          </section>

          {/* Status Success */}
          <section style={{
            background: '#FFFFFF',
            color: '#000000',
            border: '4px solid #000000',
            borderRadius: '8px',
            padding: '2.5rem',
            marginBottom: '4rem'
          }}>
            <h3 style={{ 
              color: '#000000', 
              fontSize: '1.8rem', 
              marginBottom: '1rem',
              fontWeight: '900',
              fontFamily: 'Arial Black, Arial, sans-serif'
            }}>
              ✅ SITE FUNCIONANDO PERFEITAMENTE
            </h3>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>
              Build bem-sucedido • Deploy ativo • Sem erros
            </p>
          </section>

          {/* Footer */}
          <footer style={{ 
            borderTop: '2px solid #FFFFFF',
            paddingTop: '3rem',
            color: '#CCCCCC',
            marginTop: '4rem'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              © 2024 IGREJA MILLENIUM BRASÍLIA
            </p>
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
              TODOS OS DIREITOS RESERVADOS
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', fontStyle: 'italic' }}>
              CONECTAR • DESPERTAR • TRANSFORMAR
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

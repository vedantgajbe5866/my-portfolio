function ParticleBg() {
  return (
    <Particles
      options={{
        background: {
          color: '#050816',
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: '#00e5ff',
          },
          links: {
            enable: true,
            color: '#00e5ff',
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  )
}

export default ParticleBg
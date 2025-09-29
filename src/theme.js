export const theme = {
    colors: {
      primary: '#000000', // Main text and button color
      secondary: '#ffffff', // Background and light elements
      accent: '#1a8917', // Green for highlights or buttons (Medium's style)
      border: '#f2f2f2', // Light gray for borders
      textSecondary: '#666666', // Secondary text color
      hover: '#e6e6e6', // Hover state background
    },
    fonts: {
      body: 'Georgia, serif', // Medium uses serif for titles, sans-serif for body
      title: 'Georgia, serif',
      sans: 'Helvetica, Arial, sans-serif',
    },
    fontSizes: {
      small: '12px',
      medium: '14px',
      large: '20px',
      xlarge: '24px',
    },
    spacing: (factor) => `${factor * 5}px`,
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
    },
  };
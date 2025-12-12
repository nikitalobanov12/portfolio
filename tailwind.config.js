/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				xl: '3rem',
			},
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				sans: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				// Gruvbox terminal colors
				terminal: {
					green: 'hsl(var(--terminal-green))',
					yellow: 'hsl(var(--terminal-yellow))',
					blue: 'hsl(var(--terminal-blue))',
					purple: 'hsl(var(--terminal-purple))',
					aqua: 'hsl(var(--terminal-aqua))',
					orange: 'hsl(var(--terminal-orange))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius))',
				sm: 'calc(var(--radius))',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};

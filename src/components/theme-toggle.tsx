import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

const STORAGE_KEY = 'theme';

export default function ThemeToggle() {
	const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

	useEffect(() => {
		// Read initial theme from DOM (set by inline script in Layout)
		const isDark = document.documentElement.classList.contains('dark');
		setTheme(isDark ? 'dark' : 'light');
	}, []);

	useEffect(() => {
		if (theme === null) return;
		
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	// Don't render until we know the theme (prevents hydration mismatch)
	if (theme === null) {
		return (
			<Button variant='ghost' size='icon' className='relative' aria-label='Toggle theme'>
				<span className='h-4 w-4' />
			</Button>
		);
	}

	return (
		<Button
			variant='ghost'
			size='icon'
			className='relative'
			aria-label='Toggle theme'
			onClick={toggleTheme}
		>
			{theme === 'light' ? (
				<Moon className='h-4 w-4' />
			) : (
				<Sun className='h-4 w-4' />
			)}
		</Button>
	);
}

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'theme';

export default function ThemeToggle() {
	const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

	useEffect(() => {
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

	if (theme === null) {
		return (
			<button
				className='p-2 text-muted-foreground hover:text-foreground transition-colors duration-150'
				aria-label='Toggle theme'
			>
				<span className='h-4 w-4 block' />
			</button>
		);
	}

	return (
		<button
			className='p-2 text-muted-foreground hover:text-foreground transition-colors duration-150'
			aria-label='Toggle theme'
			onClick={toggleTheme}
		>
			<span className='relative block w-4 h-4'>
				<Moon 
					className={`h-4 w-4 absolute inset-0 transition-all duration-200 ${
						theme === 'light' 
							? 'opacity-100 rotate-0' 
							: 'opacity-0 rotate-90'
					}`} 
				/>
				<Sun 
					className={`h-4 w-4 absolute inset-0 transition-all duration-200 ${
						theme === 'dark' 
							? 'opacity-100 rotate-0' 
							: 'opacity-0 -rotate-90'
					}`} 
				/>
			</span>
		</button>
	);
}

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
				className='theme-toggle p-3 rounded-full text-muted-foreground'
				aria-label='Toggle theme'
			>
				<span className='h-5 w-5 block' />
			</button>
		);
	}

	return (
		<button
			className='theme-toggle p-3 rounded-full text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95'
			aria-label='Toggle theme'
			onClick={toggleTheme}
		>
			<span className='relative block w-5 h-5'>
				<Sun 
					className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
						theme === 'dark' 
							? 'opacity-100 rotate-0 scale-100' 
							: 'opacity-0 rotate-90 scale-75'
					}`}
					strokeWidth={2}
				/>
				<Moon 
					className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
						theme === 'light' 
							? 'opacity-100 rotate-0 scale-100' 
							: 'opacity-0 -rotate-90 scale-75'
					}`}
					strokeWidth={2}
				/>
			</span>
		</button>
	);
}

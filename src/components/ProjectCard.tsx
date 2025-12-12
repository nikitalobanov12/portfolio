import { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';

interface Project {
	title: string;
	url: string;
	liveUrl?: string;
	description: string;
	techStack?: string[];
	images?: string[];
	details?: string[];
}

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const [open, setOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const hasImages = project.images && project.images.length > 0;
	const hasMultipleImages = project.images && project.images.length > 1;

	const nextImage = () => {
		if (project.images) {
			setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
		}
	};

	const prevImage = () => {
		if (project.images) {
			setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
		}
	};

	return (
		<>
			<div
				onClick={() => setOpen(true)}
				className='cursor-pointer rounded-md border border-border/50 p-5 transition-all hover:border-border hover:bg-muted/20'
			>
				<div className='space-y-3'>
					<h3 className='font-medium text-foreground'>{project.title}</h3>
					<p className='text-sm leading-relaxed text-muted-foreground whitespace-pre-line'>{project.description}</p>
					{project.techStack && (
						<div className='flex flex-wrap gap-2'>
							{project.techStack.map((tech) => (
								<span key={tech} className='rounded-full bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground'>
									{tech}
								</span>
							))}
						</div>
					)}
					<div className='flex items-center gap-4 text-sm'>
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target='_blank'
								rel='noreferrer'
								onClick={(e) => e.stopPropagation()}
								className='flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80'
							>
								<ExternalLink size={14} />
								<span>live</span>
							</a>
						)}
						<a
							href={project.url}
							target='_blank'
							rel='noreferrer'
							onClick={(e) => e.stopPropagation()}
							className='flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground'
						>
							<Github size={14} />
							<span>github</span>
						</a>
					</div>
				</div>
			</div>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className='sm:max-w-2xl'>
					<DialogHeader>
						<DialogTitle className='text-xl'>{project.title}</DialogTitle>
						{project.techStack && (
							<div className='flex flex-wrap gap-2 pt-2'>
								{project.techStack.map((tech) => (
									<span key={tech} className='rounded-full bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground'>
										{tech}
									</span>
								))}
							</div>
						)}
					</DialogHeader>

					{hasImages && (
						<div className='relative mt-2'>
							<div className='overflow-hidden rounded-md border border-border/50 bg-muted/20'>
								<img
									src={project.images![currentImageIndex]}
									alt={`${project.title} screenshot ${currentImageIndex + 1}`}
									className='aspect-video w-full object-cover'
								/>
							</div>
							{hasMultipleImages && (
								<>
									<button
										onClick={prevImage}
										className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-background'
									>
										<ChevronLeft size={20} />
									</button>
									<button
										onClick={nextImage}
										className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-background'
									>
										<ChevronRight size={20} />
									</button>
									<div className='absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5'>
										{project.images!.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentImageIndex(index)}
												className={`h-1.5 w-1.5 rounded-full transition-colors ${
													index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/50'
												}`}
											/>
										))}
									</div>
								</>
							)}
						</div>
					)}

					<DialogDescription asChild>
						<div className='space-y-4'>
							{project.details && project.details.length > 0 ? (
								<ul className='space-y-3 text-sm text-muted-foreground'>
									{project.details.map((detail, index) => (
										<li key={index} className='leading-relaxed'>
											{detail}
										</li>
									))}
								</ul>
							) : (
								<p className='text-sm leading-relaxed text-muted-foreground'>{project.description}</p>
							)}
						</div>
					</DialogDescription>

					<div className='flex items-center gap-4 pt-2 text-sm'>
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target='_blank'
								rel='noreferrer'
								className='flex items-center gap-1.5 text-primary transition-colors hover:text-primary/80'
							>
								<ExternalLink size={14} />
								<span>View Live</span>
							</a>
						)}
						<a
							href={project.url}
							target='_blank'
							rel='noreferrer'
							className='flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground'
						>
							<Github size={14} />
							<span>View on GitHub</span>
						</a>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}

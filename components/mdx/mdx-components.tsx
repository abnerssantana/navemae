// components/mdx/mdx-components.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const CustomLink = ({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
  const isExternal = href && href.startsWith('http')
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary hover:text-primary/80 inline-flex items-center"
        {...props}
      >
        {children}
        <ArrowUpRight className="ml-1 h-3 w-3" />
      </a>
    )
  }
  
  return href ? (
    <Link href={href} className="text-primary hover:text-primary/80" {...props}>
      {children}
    </Link>
  ) : (
    <a {...props}>{children}</a>
  )
}

const ResponsiveImage = ({ src, alt, ...props }: React.ComponentPropsWithoutRef<'img'>) => {
  return (
    <div className="my-8 overflow-hidden rounded-md">
      <Image 
        src={src || ''} 
        alt={alt || ''} 
        width={1200} 
        height={630} 
        className="w-full object-cover transition-transform hover:scale-105"
        {...props}
      />
    </div>
  )
}

const Heading1 = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'h1'>) => (
  <h1 className={cn("text-4xl md:text-5xl font-light mt-12 mb-6 gradient-text", className)} {...props}>{children}</h1>
)

const Heading2 = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
  <h2 className={cn("text-3xl md:text-4xl font-light mt-10 mb-4", className)} {...props}>{children}</h2>
)

const Heading3 = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
  <h3 className={cn("text-2xl md:text-3xl font-light mt-8 mb-4", className)} {...props}>{children}</h3>
)

const Paragraph = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'p'>) => (
  <p className={cn("my-6 text-muted-foreground leading-relaxed", className)} {...props}>{children}</p>
)

const UnorderedList = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'ul'>) => (
  <ul className={cn("my-6 ml-6 list-disc space-y-2 text-muted-foreground", className)} {...props}>{children}</ul>
)

const OrderedList = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
  <ol className={cn("my-6 ml-6 list-decimal space-y-2 text-muted-foreground", className)} {...props}>{children}</ol>
)

const ListItem = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
  <li className={cn("leading-relaxed", className)} {...props}>{children}</li>
)

const Quote = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'blockquote'>) => (
  <blockquote className={cn("my-6 border-l-2 border-primary pl-6 italic text-muted-foreground", className)} {...props}>
    {children}
  </blockquote>
)

const HorizontalRule = ({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) => (
  <hr className={cn("my-8 gradient-divider", className)} {...props} />
)

export const mdxComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: CustomLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Quote,
  hr: HorizontalRule,
  img: ResponsiveImage,
}
import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; 
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import py from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('bash', bash);

function CustomImage({ src, alt }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={600}
            height={300}
        />
    );
}

function PostContent(props) {
    const { image, title, content } = props.post;
    const imagePath = `/images/posts/${image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <ReactMarkdown 
                children={content} 
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter 
                                style={atomDark} 
                                language={match[1]} 
                                children={String(children).replace(/\n$/, '')} 
                                PreTag="div" 
                                {...props} 
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    image: CustomImage,
                }} 
            />
        </article>
    );
}

export default PostContent;

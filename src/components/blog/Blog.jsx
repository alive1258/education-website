import React from 'react';
import Back from '../common/back/Back';
import BlogCard from './BlogCard';


const Blog = () => {
    return (
        <div>
            <Back title="Blog Post"/>
            <section className='blog padding'>
                <div className="continer">
                <BlogCard />
                </div>

            </section>
            
        </div>
    );
};

export default Blog;
import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'gatsby'
import Sidebar from '../components/BlogDetails/Sidebar';
import Comment from '../components/BlogDetails/Comment';
import Layout from '../components/App/Layout';

const blogDetails = (props) => {
    return (
        <Layout location="blog">
            <div className="bread-cumbs-area bread-cumbs-bg">
                <div className="diplay-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                <h1>{props.Title}</h1>
                                <p>{props.Content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <section id="blog" className="our-blog main-blog bg-none">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="blog-details">
                                        <div className="post-img">
                                            <img src={props.SingleImage} alt="blog-one" />
                                        </div>
                                        
                                        <div className="blog-info">
                                            <div className="date-box">
                                                {props.SingleDate} <span className="month">{props.SingleMonth}</span>
                                            </div>

                                            <div className="title-meta">
                                                <h2>{props.SingleTitle}</h2>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-user"></i>
                                                            Posted By: 
                                                            <Link to={props.authorLink}>
                                                                {props.authorName}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-comments-o"></i> 
                                                            Comments: 
                                                            <Link to={props.CommentsLink}>
                                                                {props.TotalComments}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-tags"></i> 
                                                            Tags: 
                                                            <Link to={props.TagLink}>
                                                                {props.TagName}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                            
                                        <div className="post-content">
                                            <p>{props.PostContent1}</p>
                                            <p>{props.PostContent2}</p>
                                            <p>{props.PostContent3}</p>
                                   
                                            <div className="post-tag-media">
                                                <ul className="tag">
                                                    <li><span>Tags:</span></li>
                                                    <li><Link to="#">Business</Link></li>
                                                    <li><Link to="#">ChatApp</Link></li>
                                                    <li><Link to="#">Conversation</Link></li>
                                                </ul>
                                            </div>
                                        </div> 
                                        
                                        <Comment />
                                        
                                        <div className="comments-form">
                                            <h3 className="comments-title">Leave a Comments</h3>
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email-address" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" rows="5" placeholder="Type here..." />
                                                </div>
                                                <div className="text-center">
                                                    <div className="button">
                                                        <Link to="#">Post a comment</Link>
                                                        <div className="mask"></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Sidebar />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

blogDetails.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    SingleImage:PropTypes.string,
    SingleTitle: PropTypes.string,
    SingleDate: PropTypes.string,
    SingleMonth: PropTypes.string,
    authorLink: PropTypes.string,
    authorName: PropTypes.string,
    CommentsLink: PropTypes.string,
    TotalComments: PropTypes.string,
    TagLink: PropTypes.string,
    TagName: PropTypes.string,
    PostContent1: PropTypes.string,
    PostContent2: PropTypes.string,
    PostContent3: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
}

//Default Props
blogDetails.defaultProps = {
    Title: "Blog Details",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    SingleImage: require("../images/blog-one.jpg"),
    SingleTitle: "Risus commodo viverra mae.",
    SingleDate: "10",
    SingleMonth: "Mar",
    authorLink: "#",
    authorName: "Jone",
    CommentsLink: "#",
    TotalComments: "545",
    TagLink: "#",
    TagName: "Business",
    PostContent1: "I'm baby keytar brunch plaid bicycle rights pour-over lyft sriracha semiotics direct trade forage prism. Shaman flannel PBR&B shabby chic street art tofu everyday carry aesthetic messenger bag 3 wolf moon wolf jianbing listicle. Glossier coloring book butcher wayfarers unicorn venmo fam cold-pressed, craft beer cloud bread. IPhone synth artisan, microdosing adaptogen plaid you probably haven't heard of them affogato try-hard 3 wolf moon disrupt next level everyday carry echo park coloring book. Hoodie art party prism asymmetrical.",

    PostContent2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla",

    PostContent3: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",

    FacebookLink: "#",
    TwitterLink: "#",
    InstagramLink: "#",
    linkedinLink: "#",

}

export default blogDetails

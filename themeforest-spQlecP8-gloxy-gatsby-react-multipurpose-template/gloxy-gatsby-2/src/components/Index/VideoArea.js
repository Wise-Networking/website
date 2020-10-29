import React from 'react'
import { Link } from 'gatsby'
import ModalVideo from "react-modal-video"

const VideoArea = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    return (
        <section className="video-area video-bg">
            <div className="diplay-table">
                <div className="display-table-cell">
                    <div className="video-inner-content">
                       <div className="button__holder">
                            <ModalVideo
                                channel="youtube"
                                isOpen={isOpen}
                                videoId="vr0qNXmkUJ8"
                                onClose={() =>
                                    setIsOpen(false)
                                }
                            />
                            <Link to="#" className="plus popup-youtube" onClick={e => {
                                e.preventDefault();
                                openModal()
                            }}></Link>
                        </div>
                        <h2>Watch Intro Video</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoArea

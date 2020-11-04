import React from 'react'
import {Link} from 'gatsby'

const GoTop = (props) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])
    
    const onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <Link to="#" className={`scrolltop ${thePosition ? 'scrolltopActive' : 'scrolltopInactive'}`} onClick={e=>{
                e.preventDefault();
                scrollToTop();
            }}>
            </Link>
        )
    }

    return (
        <React.Fragment>
            {renderGoTopIcon()}
        </React.Fragment>
    )
}

export default GoTop;
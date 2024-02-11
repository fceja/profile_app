import { CSSProperties } from "react"
import "@scss/components/common/Loading.scss";

interface Props {
    optionalClassName?: string;
    optionalStyling?: CSSProperties;
}

const Loading: React.FC<Props> = ({ optionalClassName = "", optionalStyling = {} }) => {

    let loadingClassName = 'loading-fallback'

    if (!optionalClassName) {
        // return default loading div
        return (
            <div className={`default-${loadingClassName}`}>
                <h1>Loading...</h1>
            </div>
        )
    }

    // return loading div with custom styles
    const combinedClassName = `${loadingClassName}-${optionalClassName}`
    return (
        <div className={combinedClassName} style={optionalStyling}>
            <h1>Loading...</h1>
        </div>
    )

}

export default Loading
import React from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage";

const PostDetailPage = () => {
    useProtectedPage()
    return <div>
PostDetailPage
    </div>
}

export default PostDetailPage;
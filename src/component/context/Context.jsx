import { createContext, useState } from "react";


export const RegisteredContext = createContext({
    registeredUser: [],
    setRegisteredUser: () => null
})

export const PostContext = createContext({
    post: [],
    setPost: () => null
})

export const MyPostContext = createContext({
    myPost: [],
    setMyPost: () => null
})

export const TextContext = createContext({
    text: "",
    setText: () => null
})

export const FriendContext = createContext({
    friend: [],
    setFriend: () => null
})

export const RequestContext = createContext({
    request: [],
    setRequest: () => null
})

export const LikedPostContext = createContext({
    likedPost: [],
    setLikedPost: () => null
})

export const VarProvider = ({children}) => {

    const [registeredUser, setRegisteredUser] = useState([])
    const RegisteredValue = {registeredUser, setRegisteredUser}
    
    const [post, setPost] = useState([])
    const PostValue = {post, setPost}

    const [text, setText] = useState("")
    const TextValue = {text, setText}

    const [friend, setFriend] = useState([])
    const FriendValue = {friend, setFriend}

    const [request, setRequest] = useState([])
    const RequestValue = {request, setRequest}

    const [likedPost, setLikedPost] = useState([])
    const LikedPostValue = {likedPost, setLikedPost}

    const [myPost, setMyPost] = useState([])
    const MyPostValue = {myPost, setMyPost}

    return (
        <RegisteredContext.Provider value={RegisteredValue}>
            <PostContext.Provider value={PostValue}>
                <TextContext.Provider value={TextValue}>
                    <FriendContext.Provider value={FriendValue}>
                        <RequestContext.Provider value={RequestValue}>
                            <LikedPostContext.Provider value={LikedPostValue}>
                                <MyPostContext.Provider value={MyPostValue}>
                                    {children}
                                </MyPostContext.Provider>
                            </LikedPostContext.Provider>
                        </RequestContext.Provider>
                    </FriendContext.Provider>
                </TextContext.Provider>
            </PostContext.Provider>
        </RegisteredContext.Provider>

    )
}
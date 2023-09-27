self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/google-api-proxy/:path*"
            }, {
                source: "/:any*",
                destination: s
            }],
            fallback: []
        },
        "/": ["static/chunks/e971612a-9f6293376d641436.js", "static/chunks/861-7c97021ccbaf405e.js", "static/css/590536c20a0ebfdd.css", "static/chunks/pages/index-97516795f5b68a30.js"],
        "/_error": ["static/chunks/pages/_error-a3d97d182c52074e.js"],
        sortedPages: [s, "/_app", "/_error"]
    }
}("/"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
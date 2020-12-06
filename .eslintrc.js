module.exports = {
    "extends":[
        "react-app",
        "plugin:jsk-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "rules": {
        "react/jsx-filename-extension":[1,{"extensions":[".js",".jsx"]}]
    },
    "plugins": ["jsx-a11y", "prettier"]
}

const express = require('express')
import {handler7982} from "./handler7982";
const app = express()
app.get('/7982', handler7982)
app.listen(3000, () => {})
        
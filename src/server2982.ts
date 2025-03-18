
const express = require('express')
import {handler2982} from "./handler2982";
const app = express()
app.get('/2982', handler2982)
app.listen(3000, () => {})
        
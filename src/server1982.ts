
const express = require('express')
import {handler1982} from "./handler1982";
const app = express()
app.get('/1982', handler1982)
app.listen(3000, () => {})
        
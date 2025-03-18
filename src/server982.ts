
const express = require('express')
import {handler982} from "./handler982";
const app = express()
app.get('/982', handler982)
app.listen(3000, () => {})
        
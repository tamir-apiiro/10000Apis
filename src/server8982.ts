
const express = require('express')
import {handler8982} from "./handler8982";
const app = express()
app.get('/8982', handler8982)
app.listen(3000, () => {})
        
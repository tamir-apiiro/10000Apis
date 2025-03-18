
const express = require('express')
import {handler3982} from "./handler3982";
const app = express()
app.get('/3982', handler3982)
app.listen(3000, () => {})
        

const express = require('express')
import {handler5982} from "./handler5982";
const app = express()
app.get('/5982', handler5982)
app.listen(3000, () => {})
        
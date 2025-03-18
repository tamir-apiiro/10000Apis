
const express = require('express')
import {handler6982} from "./handler6982";
const app = express()
app.get('/6982', handler6982)
app.listen(3000, () => {})
        
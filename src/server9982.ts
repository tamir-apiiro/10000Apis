
const express = require('express')
import {handler9982} from "./handler9982";
const app = express()
app.get('/9982', handler9982)
app.listen(3000, () => {})
        
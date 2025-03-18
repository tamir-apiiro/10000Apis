
const express = require('express')
import {handler4982} from "./handler4982";
const app = express()
app.get('/4982', handler4982)
app.listen(3000, () => {})
        
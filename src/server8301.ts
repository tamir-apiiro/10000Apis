
const express = require('express')
import {handler8301} from "./handler8301";
const app = express()
app.get('/8301', handler8301)
app.listen(3000, () => {})
        
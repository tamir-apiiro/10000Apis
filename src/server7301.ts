
const express = require('express')
import {handler7301} from "./handler7301";
const app = express()
app.get('/7301', handler7301)
app.listen(3000, () => {})
        

const express = require('express')
import {handler301} from "./handler301";
const app = express()
app.get('/301', handler301)
app.listen(3000, () => {})
        
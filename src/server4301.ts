
const express = require('express')
import {handler4301} from "./handler4301";
const app = express()
app.get('/4301', handler4301)
app.listen(3000, () => {})
        
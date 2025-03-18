
const express = require('express')
import {handler292} from "./handler292";
const app = express()
app.get('/292', handler292)
app.listen(3000, () => {})
        
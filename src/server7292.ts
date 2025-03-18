
const express = require('express')
import {handler7292} from "./handler7292";
const app = express()
app.get('/7292', handler7292)
app.listen(3000, () => {})
        
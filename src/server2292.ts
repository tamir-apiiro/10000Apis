
const express = require('express')
import {handler2292} from "./handler2292";
const app = express()
app.get('/2292', handler2292)
app.listen(3000, () => {})
        
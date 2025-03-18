
const express = require('express')
import {handler647} from "./handler647";
const app = express()
app.get('/647', handler647)
app.listen(3000, () => {})
        
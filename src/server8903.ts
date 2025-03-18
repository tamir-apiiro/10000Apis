
const express = require('express')
import {handler8903} from "./handler8903";
const app = express()
app.get('/8903', handler8903)
app.listen(3000, () => {})
        
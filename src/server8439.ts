
const express = require('express')
import {handler8439} from "./handler8439";
const app = express()
app.get('/8439', handler8439)
app.listen(3000, () => {})
        
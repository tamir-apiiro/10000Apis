
const express = require('express')
import {handler8085} from "./handler8085";
const app = express()
app.get('/8085', handler8085)
app.listen(3000, () => {})
        
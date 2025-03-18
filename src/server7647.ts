
const express = require('express')
import {handler7647} from "./handler7647";
const app = express()
app.get('/7647', handler7647)
app.listen(3000, () => {})
        
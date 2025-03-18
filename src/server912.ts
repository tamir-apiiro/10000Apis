
const express = require('express')
import {handler912} from "./handler912";
const app = express()
app.get('/912', handler912)
app.listen(3000, () => {})
        
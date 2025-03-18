
const express = require('express')
import {handler768} from "./handler768";
const app = express()
app.get('/768', handler768)
app.listen(3000, () => {})
        
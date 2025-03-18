
const express = require('express')
import {handler7204} from "./handler7204";
const app = express()
app.get('/7204', handler7204)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8931} from "./handler8931";
const app = express()
app.get('/8931', handler8931)
app.listen(3000, () => {})
        
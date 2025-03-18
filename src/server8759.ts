
const express = require('express')
import {handler8759} from "./handler8759";
const app = express()
app.get('/8759', handler8759)
app.listen(3000, () => {})
        
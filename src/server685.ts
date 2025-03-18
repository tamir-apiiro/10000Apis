
const express = require('express')
import {handler685} from "./handler685";
const app = express()
app.get('/685', handler685)
app.listen(3000, () => {})
        
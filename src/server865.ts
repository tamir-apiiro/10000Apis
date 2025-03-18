
const express = require('express')
import {handler865} from "./handler865";
const app = express()
app.get('/865', handler865)
app.listen(3000, () => {})
        
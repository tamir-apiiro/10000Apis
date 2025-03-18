
const express = require('express')
import {handler4204} from "./handler4204";
const app = express()
app.get('/4204', handler4204)
app.listen(3000, () => {})
        
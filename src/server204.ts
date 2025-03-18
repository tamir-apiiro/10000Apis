
const express = require('express')
import {handler204} from "./handler204";
const app = express()
app.get('/204', handler204)
app.listen(3000, () => {})
        
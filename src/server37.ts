
const express = require('express')
import {handler37} from "./handler37";
const app = express()
app.get('/37', handler37)
app.listen(3000, () => {})
        
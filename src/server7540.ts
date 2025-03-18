
const express = require('express')
import {handler7540} from "./handler7540";
const app = express()
app.get('/7540', handler7540)
app.listen(3000, () => {})
        
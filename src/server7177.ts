
const express = require('express')
import {handler7177} from "./handler7177";
const app = express()
app.get('/7177', handler7177)
app.listen(3000, () => {})
        
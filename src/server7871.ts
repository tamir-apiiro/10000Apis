
const express = require('express')
import {handler7871} from "./handler7871";
const app = express()
app.get('/7871', handler7871)
app.listen(3000, () => {})
        
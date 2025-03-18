
const express = require('express')
import {handler7020} from "./handler7020";
const app = express()
app.get('/7020', handler7020)
app.listen(3000, () => {})
        
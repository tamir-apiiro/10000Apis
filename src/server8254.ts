
const express = require('express')
import {handler8254} from "./handler8254";
const app = express()
app.get('/8254', handler8254)
app.listen(3000, () => {})
        
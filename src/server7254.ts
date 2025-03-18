
const express = require('express')
import {handler7254} from "./handler7254";
const app = express()
app.get('/7254', handler7254)
app.listen(3000, () => {})
        
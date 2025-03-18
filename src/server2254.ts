
const express = require('express')
import {handler2254} from "./handler2254";
const app = express()
app.get('/2254', handler2254)
app.listen(3000, () => {})
        

const express = require('express')
import {handler254} from "./handler254";
const app = express()
app.get('/254', handler254)
app.listen(3000, () => {})
        
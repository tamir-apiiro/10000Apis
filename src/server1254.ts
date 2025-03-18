
const express = require('express')
import {handler1254} from "./handler1254";
const app = express()
app.get('/1254', handler1254)
app.listen(3000, () => {})
        
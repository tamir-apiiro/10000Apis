
const express = require('express')
import {handler3254} from "./handler3254";
const app = express()
app.get('/3254', handler3254)
app.listen(3000, () => {})
        
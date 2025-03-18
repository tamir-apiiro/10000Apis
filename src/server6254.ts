
const express = require('express')
import {handler6254} from "./handler6254";
const app = express()
app.get('/6254', handler6254)
app.listen(3000, () => {})
        
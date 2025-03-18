
const express = require('express')
import {handler867} from "./handler867";
const app = express()
app.get('/867', handler867)
app.listen(3000, () => {})
        
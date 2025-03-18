
const express = require('express')
import {handler7169} from "./handler7169";
const app = express()
app.get('/7169', handler7169)
app.listen(3000, () => {})
        
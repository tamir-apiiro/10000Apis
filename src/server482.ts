
const express = require('express')
import {handler482} from "./handler482";
const app = express()
app.get('/482', handler482)
app.listen(3000, () => {})
        
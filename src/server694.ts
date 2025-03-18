
const express = require('express')
import {handler694} from "./handler694";
const app = express()
app.get('/694', handler694)
app.listen(3000, () => {})
        

const express = require('express')
import {handler356} from "./handler356";
const app = express()
app.get('/356', handler356)
app.listen(3000, () => {})
        
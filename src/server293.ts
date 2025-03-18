
const express = require('express')
import {handler293} from "./handler293";
const app = express()
app.get('/293', handler293)
app.listen(3000, () => {})
        
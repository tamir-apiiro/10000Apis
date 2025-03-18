
const express = require('express')
import {handler246} from "./handler246";
const app = express()
app.get('/246', handler246)
app.listen(3000, () => {})
        
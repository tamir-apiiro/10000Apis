
const express = require('express')
import {handler8788} from "./handler8788";
const app = express()
app.get('/8788', handler8788)
app.listen(3000, () => {})
        
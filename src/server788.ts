
const express = require('express')
import {handler788} from "./handler788";
const app = express()
app.get('/788', handler788)
app.listen(3000, () => {})
        
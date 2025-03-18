
const express = require('express')
import {handler8188} from "./handler8188";
const app = express()
app.get('/8188', handler8188)
app.listen(3000, () => {})
        
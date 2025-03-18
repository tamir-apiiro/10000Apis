
const express = require('express')
import {handler8673} from "./handler8673";
const app = express()
app.get('/8673', handler8673)
app.listen(3000, () => {})
        
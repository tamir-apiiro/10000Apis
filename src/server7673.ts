
const express = require('express')
import {handler7673} from "./handler7673";
const app = express()
app.get('/7673', handler7673)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7801} from "./handler7801";
const app = express()
app.get('/7801', handler7801)
app.listen(3000, () => {})
        
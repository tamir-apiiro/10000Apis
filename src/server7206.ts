
const express = require('express')
import {handler7206} from "./handler7206";
const app = express()
app.get('/7206', handler7206)
app.listen(3000, () => {})
        
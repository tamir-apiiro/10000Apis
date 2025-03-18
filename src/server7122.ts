
const express = require('express')
import {handler7122} from "./handler7122";
const app = express()
app.get('/7122', handler7122)
app.listen(3000, () => {})
        
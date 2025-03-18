
const express = require('express')
import {handler7060} from "./handler7060";
const app = express()
app.get('/7060', handler7060)
app.listen(3000, () => {})
        
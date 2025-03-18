
const express = require('express')
import {handler7503} from "./handler7503";
const app = express()
app.get('/7503', handler7503)
app.listen(3000, () => {})
        
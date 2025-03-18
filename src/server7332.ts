
const express = require('express')
import {handler7332} from "./handler7332";
const app = express()
app.get('/7332', handler7332)
app.listen(3000, () => {})
        
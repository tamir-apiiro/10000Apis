
const express = require('express')
import {handler7946} from "./handler7946";
const app = express()
app.get('/7946', handler7946)
app.listen(3000, () => {})
        
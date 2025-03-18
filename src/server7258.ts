
const express = require('express')
import {handler7258} from "./handler7258";
const app = express()
app.get('/7258', handler7258)
app.listen(3000, () => {})
        
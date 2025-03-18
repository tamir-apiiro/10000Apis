
const express = require('express')
import {handler7425} from "./handler7425";
const app = express()
app.get('/7425', handler7425)
app.listen(3000, () => {})
        
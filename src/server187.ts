
const express = require('express')
import {handler187} from "./handler187";
const app = express()
app.get('/187', handler187)
app.listen(3000, () => {})
        
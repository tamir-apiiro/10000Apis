
const express = require('express')
import {handler7187} from "./handler7187";
const app = express()
app.get('/7187', handler7187)
app.listen(3000, () => {})
        
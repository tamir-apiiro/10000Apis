
const express = require('express')
import {handler7158} from "./handler7158";
const app = express()
app.get('/7158', handler7158)
app.listen(3000, () => {})
        
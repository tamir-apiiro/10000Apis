
const express = require('express')
import {handler7008} from "./handler7008";
const app = express()
app.get('/7008', handler7008)
app.listen(3000, () => {})
        
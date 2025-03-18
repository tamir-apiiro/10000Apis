
const express = require('express')
import {handler7895} from "./handler7895";
const app = express()
app.get('/7895', handler7895)
app.listen(3000, () => {})
        
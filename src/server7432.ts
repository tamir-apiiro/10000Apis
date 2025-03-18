
const express = require('express')
import {handler7432} from "./handler7432";
const app = express()
app.get('/7432', handler7432)
app.listen(3000, () => {})
        
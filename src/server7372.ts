
const express = require('express')
import {handler7372} from "./handler7372";
const app = express()
app.get('/7372', handler7372)
app.listen(3000, () => {})
        
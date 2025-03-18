
const express = require('express')
import {handler849} from "./handler849";
const app = express()
app.get('/849', handler849)
app.listen(3000, () => {})
        
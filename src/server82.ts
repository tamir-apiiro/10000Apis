
const express = require('express')
import {handler82} from "./handler82";
const app = express()
app.get('/82', handler82)
app.listen(3000, () => {})
        
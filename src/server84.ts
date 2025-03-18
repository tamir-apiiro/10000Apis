
const express = require('express')
import {handler84} from "./handler84";
const app = express()
app.get('/84', handler84)
app.listen(3000, () => {})
        
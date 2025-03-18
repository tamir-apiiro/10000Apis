
const express = require('express')
import {handler7344} from "./handler7344";
const app = express()
app.get('/7344', handler7344)
app.listen(3000, () => {})
        
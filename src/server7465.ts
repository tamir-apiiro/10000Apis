
const express = require('express')
import {handler7465} from "./handler7465";
const app = express()
app.get('/7465', handler7465)
app.listen(3000, () => {})
        
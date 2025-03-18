
const express = require('express')
import {handler3901} from "./handler3901";
const app = express()
app.get('/3901', handler3901)
app.listen(3000, () => {})
        
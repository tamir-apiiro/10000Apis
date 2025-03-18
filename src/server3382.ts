
const express = require('express')
import {handler3382} from "./handler3382";
const app = express()
app.get('/3382', handler3382)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8109} from "./handler8109";
const app = express()
app.get('/8109', handler8109)
app.listen(3000, () => {})
        
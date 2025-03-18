
const express = require('express')
import {handler360} from "./handler360";
const app = express()
app.get('/360', handler360)
app.listen(3000, () => {})
        
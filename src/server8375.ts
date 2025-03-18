
const express = require('express')
import {handler8375} from "./handler8375";
const app = express()
app.get('/8375', handler8375)
app.listen(3000, () => {})
        
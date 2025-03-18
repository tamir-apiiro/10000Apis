
const express = require('express')
import {handler8818} from "./handler8818";
const app = express()
app.get('/8818', handler8818)
app.listen(3000, () => {})
        
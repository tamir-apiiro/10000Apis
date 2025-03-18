
const express = require('express')
import {handler8396} from "./handler8396";
const app = express()
app.get('/8396', handler8396)
app.listen(3000, () => {})
        
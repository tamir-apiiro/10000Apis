
const express = require('express')
import {handler8038} from "./handler8038";
const app = express()
app.get('/8038', handler8038)
app.listen(3000, () => {})
        
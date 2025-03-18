
const express = require('express')
import {handler8655} from "./handler8655";
const app = express()
app.get('/8655', handler8655)
app.listen(3000, () => {})
        
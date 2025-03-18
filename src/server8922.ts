
const express = require('express')
import {handler8922} from "./handler8922";
const app = express()
app.get('/8922', handler8922)
app.listen(3000, () => {})
        
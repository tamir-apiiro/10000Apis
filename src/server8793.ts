
const express = require('express')
import {handler8793} from "./handler8793";
const app = express()
app.get('/8793', handler8793)
app.listen(3000, () => {})
        
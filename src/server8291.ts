
const express = require('express')
import {handler8291} from "./handler8291";
const app = express()
app.get('/8291', handler8291)
app.listen(3000, () => {})
        
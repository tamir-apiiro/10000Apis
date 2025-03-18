
const express = require('express')
import {handler8259} from "./handler8259";
const app = express()
app.get('/8259', handler8259)
app.listen(3000, () => {})
        
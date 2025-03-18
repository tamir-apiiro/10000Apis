
const express = require('express')
import {handler259} from "./handler259";
const app = express()
app.get('/259', handler259)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7259} from "./handler7259";
const app = express()
app.get('/7259', handler7259)
app.listen(3000, () => {})
        
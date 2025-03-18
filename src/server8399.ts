
const express = require('express')
import {handler8399} from "./handler8399";
const app = express()
app.get('/8399', handler8399)
app.listen(3000, () => {})
        
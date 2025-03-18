
const express = require('express')
import {handler8274} from "./handler8274";
const app = express()
app.get('/8274', handler8274)
app.listen(3000, () => {})
        
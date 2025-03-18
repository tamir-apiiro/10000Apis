
const express = require('express')
import {handler869} from "./handler869";
const app = express()
app.get('/869', handler869)
app.listen(3000, () => {})
        
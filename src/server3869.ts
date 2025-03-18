
const express = require('express')
import {handler3869} from "./handler3869";
const app = express()
app.get('/3869', handler3869)
app.listen(3000, () => {})
        
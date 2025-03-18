
const express = require('express')
import {handler3618} from "./handler3618";
const app = express()
app.get('/3618', handler3618)
app.listen(3000, () => {})
        
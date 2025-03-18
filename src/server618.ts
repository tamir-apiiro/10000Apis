
const express = require('express')
import {handler618} from "./handler618";
const app = express()
app.get('/618', handler618)
app.listen(3000, () => {})
        
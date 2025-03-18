
const express = require('express')
import {handler7191} from "./handler7191";
const app = express()
app.get('/7191', handler7191)
app.listen(3000, () => {})
        
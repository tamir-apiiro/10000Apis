
const express = require('express')
import {handler7320} from "./handler7320";
const app = express()
app.get('/7320', handler7320)
app.listen(3000, () => {})
        
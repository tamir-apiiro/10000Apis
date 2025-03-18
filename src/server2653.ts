
const express = require('express')
import {handler2653} from "./handler2653";
const app = express()
app.get('/2653', handler2653)
app.listen(3000, () => {})
        
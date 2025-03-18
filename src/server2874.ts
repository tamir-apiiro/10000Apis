
const express = require('express')
import {handler2874} from "./handler2874";
const app = express()
app.get('/2874', handler2874)
app.listen(3000, () => {})
        
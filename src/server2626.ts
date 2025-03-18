
const express = require('express')
import {handler2626} from "./handler2626";
const app = express()
app.get('/2626', handler2626)
app.listen(3000, () => {})
        
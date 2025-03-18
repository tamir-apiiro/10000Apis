
const express = require('express')
import {handler2851} from "./handler2851";
const app = express()
app.get('/2851', handler2851)
app.listen(3000, () => {})
        
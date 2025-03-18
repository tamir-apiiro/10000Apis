
const express = require('express')
import {handler7239} from "./handler7239";
const app = express()
app.get('/7239', handler7239)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7841} from "./handler7841";
const app = express()
app.get('/7841', handler7841)
app.listen(3000, () => {})
        
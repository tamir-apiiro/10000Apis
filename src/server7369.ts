
const express = require('express')
import {handler7369} from "./handler7369";
const app = express()
app.get('/7369', handler7369)
app.listen(3000, () => {})
        
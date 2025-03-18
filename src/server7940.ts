
const express = require('express')
import {handler7940} from "./handler7940";
const app = express()
app.get('/7940', handler7940)
app.listen(3000, () => {})
        
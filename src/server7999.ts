
const express = require('express')
import {handler7999} from "./handler7999";
const app = express()
app.get('/7999', handler7999)
app.listen(3000, () => {})
        
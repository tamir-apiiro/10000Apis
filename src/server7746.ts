
const express = require('express')
import {handler7746} from "./handler7746";
const app = express()
app.get('/7746', handler7746)
app.listen(3000, () => {})
        
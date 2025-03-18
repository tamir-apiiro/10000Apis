
const express = require('express')
import {handler95} from "./handler95";
const app = express()
app.get('/95', handler95)
app.listen(3000, () => {})
        
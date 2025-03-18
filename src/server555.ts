
const express = require('express')
import {handler555} from "./handler555";
const app = express()
app.get('/555', handler555)
app.listen(3000, () => {})
        

const express = require('express')
import {handler3555} from "./handler3555";
const app = express()
app.get('/3555', handler3555)
app.listen(3000, () => {})
        
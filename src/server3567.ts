
const express = require('express')
import {handler3567} from "./handler3567";
const app = express()
app.get('/3567', handler3567)
app.listen(3000, () => {})
        
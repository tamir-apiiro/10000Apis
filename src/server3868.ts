
const express = require('express')
import {handler3868} from "./handler3868";
const app = express()
app.get('/3868', handler3868)
app.listen(3000, () => {})
        
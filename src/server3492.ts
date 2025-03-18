
const express = require('express')
import {handler3492} from "./handler3492";
const app = express()
app.get('/3492', handler3492)
app.listen(3000, () => {})
        
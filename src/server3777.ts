
const express = require('express')
import {handler3777} from "./handler3777";
const app = express()
app.get('/3777', handler3777)
app.listen(3000, () => {})
        
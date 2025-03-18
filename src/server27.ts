
const express = require('express')
import {handler27} from "./handler27";
const app = express()
app.get('/27', handler27)
app.listen(3000, () => {})
        
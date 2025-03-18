
const express = require('express')
import {handler882} from "./handler882";
const app = express()
app.get('/882', handler882)
app.listen(3000, () => {})
        
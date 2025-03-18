
const express = require('express')
import {handler7136} from "./handler7136";
const app = express()
app.get('/7136', handler7136)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6136} from "./handler6136";
const app = express()
app.get('/6136', handler6136)
app.listen(3000, () => {})
        
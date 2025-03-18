
const express = require('express')
import {handler6511} from "./handler6511";
const app = express()
app.get('/6511', handler6511)
app.listen(3000, () => {})
        
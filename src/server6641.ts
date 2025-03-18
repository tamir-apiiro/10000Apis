
const express = require('express')
import {handler6641} from "./handler6641";
const app = express()
app.get('/6641', handler6641)
app.listen(3000, () => {})
        
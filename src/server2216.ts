
const express = require('express')
import {handler2216} from "./handler2216";
const app = express()
app.get('/2216', handler2216)
app.listen(3000, () => {})
        
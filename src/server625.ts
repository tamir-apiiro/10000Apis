
const express = require('express')
import {handler625} from "./handler625";
const app = express()
app.get('/625', handler625)
app.listen(3000, () => {})
        
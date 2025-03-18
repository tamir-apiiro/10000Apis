
const express = require('express')
import {handler6214} from "./handler6214";
const app = express()
app.get('/6214', handler6214)
app.listen(3000, () => {})
        
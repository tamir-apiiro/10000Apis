
const express = require('express')
import {handler6456} from "./handler6456";
const app = express()
app.get('/6456', handler6456)
app.listen(3000, () => {})
        
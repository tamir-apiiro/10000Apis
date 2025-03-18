
const express = require('express')
import {handler6848} from "./handler6848";
const app = express()
app.get('/6848', handler6848)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6919} from "./handler6919";
const app = express()
app.get('/6919', handler6919)
app.listen(3000, () => {})
        
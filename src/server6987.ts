
const express = require('express')
import {handler6987} from "./handler6987";
const app = express()
app.get('/6987', handler6987)
app.listen(3000, () => {})
        
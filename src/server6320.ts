
const express = require('express')
import {handler6320} from "./handler6320";
const app = express()
app.get('/6320', handler6320)
app.listen(3000, () => {})
        
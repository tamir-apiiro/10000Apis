
const express = require('express')
import {handler6241} from "./handler6241";
const app = express()
app.get('/6241', handler6241)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6402} from "./handler6402";
const app = express()
app.get('/6402', handler6402)
app.listen(3000, () => {})
        
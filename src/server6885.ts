
const express = require('express')
import {handler6885} from "./handler6885";
const app = express()
app.get('/6885', handler6885)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6774} from "./handler6774";
const app = express()
app.get('/6774', handler6774)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6794} from "./handler6794";
const app = express()
app.get('/6794', handler6794)
app.listen(3000, () => {})
        
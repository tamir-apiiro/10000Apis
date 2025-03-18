
const express = require('express')
import {handler6878} from "./handler6878";
const app = express()
app.get('/6878', handler6878)
app.listen(3000, () => {})
        
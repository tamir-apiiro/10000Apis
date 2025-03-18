
const express = require('express')
import {handler6190} from "./handler6190";
const app = express()
app.get('/6190', handler6190)
app.listen(3000, () => {})
        
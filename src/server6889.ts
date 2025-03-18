
const express = require('express')
import {handler6889} from "./handler6889";
const app = express()
app.get('/6889', handler6889)
app.listen(3000, () => {})
        
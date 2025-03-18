
const express = require('express')
import {handler889} from "./handler889";
const app = express()
app.get('/889', handler889)
app.listen(3000, () => {})
        
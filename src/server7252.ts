
const express = require('express')
import {handler7252} from "./handler7252";
const app = express()
app.get('/7252', handler7252)
app.listen(3000, () => {})
        
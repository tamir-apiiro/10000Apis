
const express = require('express')
import {handler9252} from "./handler9252";
const app = express()
app.get('/9252', handler9252)
app.listen(3000, () => {})
        
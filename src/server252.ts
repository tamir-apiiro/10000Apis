
const express = require('express')
import {handler252} from "./handler252";
const app = express()
app.get('/252', handler252)
app.listen(3000, () => {})
        
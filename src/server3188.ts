
const express = require('express')
import {handler3188} from "./handler3188";
const app = express()
app.get('/3188', handler3188)
app.listen(3000, () => {})
        
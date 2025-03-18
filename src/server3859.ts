
const express = require('express')
import {handler3859} from "./handler3859";
const app = express()
app.get('/3859', handler3859)
app.listen(3000, () => {})
        
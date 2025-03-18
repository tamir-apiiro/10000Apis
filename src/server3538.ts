
const express = require('express')
import {handler3538} from "./handler3538";
const app = express()
app.get('/3538', handler3538)
app.listen(3000, () => {})
        
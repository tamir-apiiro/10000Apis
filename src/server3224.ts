
const express = require('express')
import {handler3224} from "./handler3224";
const app = express()
app.get('/3224', handler3224)
app.listen(3000, () => {})
        
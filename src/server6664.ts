
const express = require('express')
import {handler6664} from "./handler6664";
const app = express()
app.get('/6664', handler6664)
app.listen(3000, () => {})
        
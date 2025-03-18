
const express = require('express')
import {handler6991} from "./handler6991";
const app = express()
app.get('/6991', handler6991)
app.listen(3000, () => {})
        
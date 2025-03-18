
const express = require('express')
import {handler6124} from "./handler6124";
const app = express()
app.get('/6124', handler6124)
app.listen(3000, () => {})
        
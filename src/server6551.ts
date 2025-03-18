
const express = require('express')
import {handler6551} from "./handler6551";
const app = express()
app.get('/6551', handler6551)
app.listen(3000, () => {})
        
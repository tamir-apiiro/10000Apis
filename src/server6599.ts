
const express = require('express')
import {handler6599} from "./handler6599";
const app = express()
app.get('/6599', handler6599)
app.listen(3000, () => {})
        
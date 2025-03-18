
const express = require('express')
import {handler6628} from "./handler6628";
const app = express()
app.get('/6628', handler6628)
app.listen(3000, () => {})
        
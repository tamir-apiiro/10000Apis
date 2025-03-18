
const express = require('express')
import {handler6809} from "./handler6809";
const app = express()
app.get('/6809', handler6809)
app.listen(3000, () => {})
        
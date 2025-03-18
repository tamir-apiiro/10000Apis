
const express = require('express')
import {handler6728} from "./handler6728";
const app = express()
app.get('/6728', handler6728)
app.listen(3000, () => {})
        
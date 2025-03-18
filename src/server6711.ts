
const express = require('express')
import {handler6711} from "./handler6711";
const app = express()
app.get('/6711', handler6711)
app.listen(3000, () => {})
        
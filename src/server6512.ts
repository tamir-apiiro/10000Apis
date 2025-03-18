
const express = require('express')
import {handler6512} from "./handler6512";
const app = express()
app.get('/6512', handler6512)
app.listen(3000, () => {})
        
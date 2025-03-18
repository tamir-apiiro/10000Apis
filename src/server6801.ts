
const express = require('express')
import {handler6801} from "./handler6801";
const app = express()
app.get('/6801', handler6801)
app.listen(3000, () => {})
        
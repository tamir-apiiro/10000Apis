
const express = require('express')
import {handler6102} from "./handler6102";
const app = express()
app.get('/6102', handler6102)
app.listen(3000, () => {})
        
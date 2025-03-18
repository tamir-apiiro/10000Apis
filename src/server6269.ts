
const express = require('express')
import {handler6269} from "./handler6269";
const app = express()
app.get('/6269', handler6269)
app.listen(3000, () => {})
        
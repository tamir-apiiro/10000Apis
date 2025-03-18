
const express = require('express')
import {handler6268} from "./handler6268";
const app = express()
app.get('/6268', handler6268)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6260} from "./handler6260";
const app = express()
app.get('/6260', handler6260)
app.listen(3000, () => {})
        
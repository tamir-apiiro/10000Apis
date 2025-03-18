
const express = require('express')
import {handler6795} from "./handler6795";
const app = express()
app.get('/6795', handler6795)
app.listen(3000, () => {})
        
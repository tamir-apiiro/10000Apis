
const express = require('express')
import {handler6769} from "./handler6769";
const app = express()
app.get('/6769', handler6769)
app.listen(3000, () => {})
        
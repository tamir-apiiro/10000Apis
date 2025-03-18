
const express = require('express')
import {handler6172} from "./handler6172";
const app = express()
app.get('/6172', handler6172)
app.listen(3000, () => {})
        
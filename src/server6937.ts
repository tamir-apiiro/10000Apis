
const express = require('express')
import {handler6937} from "./handler6937";
const app = express()
app.get('/6937', handler6937)
app.listen(3000, () => {})
        
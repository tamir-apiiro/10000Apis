
const express = require('express')
import {handler6748} from "./handler6748";
const app = express()
app.get('/6748', handler6748)
app.listen(3000, () => {})
        
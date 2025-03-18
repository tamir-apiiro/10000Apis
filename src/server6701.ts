
const express = require('express')
import {handler6701} from "./handler6701";
const app = express()
app.get('/6701', handler6701)
app.listen(3000, () => {})
        
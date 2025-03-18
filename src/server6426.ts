
const express = require('express')
import {handler6426} from "./handler6426";
const app = express()
app.get('/6426', handler6426)
app.listen(3000, () => {})
        
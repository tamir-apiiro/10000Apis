
const express = require('express')
import {handler6805} from "./handler6805";
const app = express()
app.get('/6805', handler6805)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6530} from "./handler6530";
const app = express()
app.get('/6530', handler6530)
app.listen(3000, () => {})
        
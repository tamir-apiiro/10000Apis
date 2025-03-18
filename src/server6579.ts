
const express = require('express')
import {handler6579} from "./handler6579";
const app = express()
app.get('/6579', handler6579)
app.listen(3000, () => {})
        
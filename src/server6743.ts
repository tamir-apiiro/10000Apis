
const express = require('express')
import {handler6743} from "./handler6743";
const app = express()
app.get('/6743', handler6743)
app.listen(3000, () => {})
        
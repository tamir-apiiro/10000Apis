
const express = require('express')
import {handler6321} from "./handler6321";
const app = express()
app.get('/6321', handler6321)
app.listen(3000, () => {})
        
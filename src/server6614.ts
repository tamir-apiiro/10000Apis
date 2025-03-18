
const express = require('express')
import {handler6614} from "./handler6614";
const app = express()
app.get('/6614', handler6614)
app.listen(3000, () => {})
        
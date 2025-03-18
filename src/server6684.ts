
const express = require('express')
import {handler6684} from "./handler6684";
const app = express()
app.get('/6684', handler6684)
app.listen(3000, () => {})
        
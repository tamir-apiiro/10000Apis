
const express = require('express')
import {handler6944} from "./handler6944";
const app = express()
app.get('/6944', handler6944)
app.listen(3000, () => {})
        
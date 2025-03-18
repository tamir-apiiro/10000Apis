
const express = require('express')
import {handler6643} from "./handler6643";
const app = express()
app.get('/6643', handler6643)
app.listen(3000, () => {})
        
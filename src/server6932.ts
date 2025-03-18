
const express = require('express')
import {handler6932} from "./handler6932";
const app = express()
app.get('/6932', handler6932)
app.listen(3000, () => {})
        
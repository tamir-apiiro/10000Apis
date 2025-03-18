
const express = require('express')
import {handler6652} from "./handler6652";
const app = express()
app.get('/6652', handler6652)
app.listen(3000, () => {})
        
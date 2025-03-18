
const express = require('express')
import {handler6655} from "./handler6655";
const app = express()
app.get('/6655', handler6655)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6912} from "./handler6912";
const app = express()
app.get('/6912', handler6912)
app.listen(3000, () => {})
        
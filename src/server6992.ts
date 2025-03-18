
const express = require('express')
import {handler6992} from "./handler6992";
const app = express()
app.get('/6992', handler6992)
app.listen(3000, () => {})
        
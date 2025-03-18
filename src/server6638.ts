
const express = require('express')
import {handler6638} from "./handler6638";
const app = express()
app.get('/6638', handler6638)
app.listen(3000, () => {})
        
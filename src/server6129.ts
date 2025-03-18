
const express = require('express')
import {handler6129} from "./handler6129";
const app = express()
app.get('/6129', handler6129)
app.listen(3000, () => {})
        
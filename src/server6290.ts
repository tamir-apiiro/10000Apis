
const express = require('express')
import {handler6290} from "./handler6290";
const app = express()
app.get('/6290', handler6290)
app.listen(3000, () => {})
        
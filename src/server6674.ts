
const express = require('express')
import {handler6674} from "./handler6674";
const app = express()
app.get('/6674', handler6674)
app.listen(3000, () => {})
        
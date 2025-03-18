
const express = require('express')
import {handler6528} from "./handler6528";
const app = express()
app.get('/6528', handler6528)
app.listen(3000, () => {})
        
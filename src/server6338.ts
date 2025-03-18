
const express = require('express')
import {handler6338} from "./handler6338";
const app = express()
app.get('/6338', handler6338)
app.listen(3000, () => {})
        
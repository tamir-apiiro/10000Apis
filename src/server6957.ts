
const express = require('express')
import {handler6957} from "./handler6957";
const app = express()
app.get('/6957', handler6957)
app.listen(3000, () => {})
        
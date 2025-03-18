
const express = require('express')
import {handler6095} from "./handler6095";
const app = express()
app.get('/6095', handler6095)
app.listen(3000, () => {})
        
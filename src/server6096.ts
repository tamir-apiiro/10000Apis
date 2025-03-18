
const express = require('express')
import {handler6096} from "./handler6096";
const app = express()
app.get('/6096', handler6096)
app.listen(3000, () => {})
        
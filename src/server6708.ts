
const express = require('express')
import {handler6708} from "./handler6708";
const app = express()
app.get('/6708', handler6708)
app.listen(3000, () => {})
        
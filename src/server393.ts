
const express = require('express')
import {handler393} from "./handler393";
const app = express()
app.get('/393', handler393)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7338} from "./handler7338";
const app = express()
app.get('/7338', handler7338)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4338} from "./handler4338";
const app = express()
app.get('/4338', handler4338)
app.listen(3000, () => {})
        
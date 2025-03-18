
const express = require('express')
import {handler338} from "./handler338";
const app = express()
app.get('/338', handler338)
app.listen(3000, () => {})
        
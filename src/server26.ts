
const express = require('express')
import {handler26} from "./handler26";
const app = express()
app.get('/26', handler26)
app.listen(3000, () => {})
        
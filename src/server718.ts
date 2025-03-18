
const express = require('express')
import {handler718} from "./handler718";
const app = express()
app.get('/718', handler718)
app.listen(3000, () => {})
        
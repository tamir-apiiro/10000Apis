
const express = require('express')
import {handler22} from "./handler22";
const app = express()
app.get('/22', handler22)
app.listen(3000, () => {})
        

const express = require('express')
import {handler802} from "./handler802";
const app = express()
app.get('/802', handler802)
app.listen(3000, () => {})
        